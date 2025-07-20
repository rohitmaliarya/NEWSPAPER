require("dotenv").config(); // <-- Move this to the top

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

// Stripe webhook (must be before express.json())
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("Webhook received");
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const email = session.metadata.email;
      const username = session.metadata.username;

      await db.collection("users").insertOne({
        username,
        email,
        plan: "Pro",
        stripeSessionId: session.id,
      });
      console.log("Pro user saved to MongoDB:", email);
    }

    res.status(200).send("Received");
  }
);

// Now add express.json() for other routes
app.use(express.json());

// MongoDB setup
const client = new MongoClient(process.env.MONGODB_URI);
let db;

client.connect().then(() => {
  db = client.db("subscriptionApp");
  console.log("Connected to MongoDB");
});

// Store FREE user directly
app.post("/api/register", async (req, res) => {
  const { username, email, plan } = req.body;

  if (plan === "Free") {
    await db.collection("users").insertOne({ username, email, plan });
    return res.json({ message: "User saved as Free" });
  }

  // Create Stripe Checkout session for PRO
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: "price_1Qj0MZChyQxWbxRuFuAu3WCM",
        quantity: 1,
      },
    ],
    success_url: `http://localhost:5173/success?email=${email}&username=${username}`,
    cancel_url: "http://localhost:5173/cancel",
    metadata: { email, username },
  });

  res.json({ url: session.url });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
