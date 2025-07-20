# NodeSure NewsLetter

[youtube](https://www.youtube.com/watch?v=tZf2mtII3bw)

NodeSure NewsLetter is a modern, full-stack newspaper subscription platform. Users can subscribe to a free or pro plan, receive curated news and analysis, and enjoy a seamless payment experience powered by Stripe. The project features a beautiful React frontend, Node.js/Express backend, and Stripe integration for secure payments.

---




## Features

- 📬 **Newsletter Subscription**: Free and Pro plans for users.
- 💳 **Stripe Payments**: Secure checkout for Pro subscribers.
- 📈 **Market Analysis, Reports, Alerts**: Premium content for Pro users.
- 🌐 **Responsive UI**: Built with React and Tailwind CSS.
- 🛡️ **Backend API**: Node.js/Express REST API for registration and payment.
- 🔔 **Email Notifications**: (Optional) Send confirmation emails to users.
- 📝 **Admin-ready**: Easily extendable for admin dashboards and analytics.

---

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router DOM, Lucide Icons
- **Backend**: Node.js, Express, Stripe SDK, CORS, dotenv
- **Database**: (Add your DB, e.g., MongoDB/PostgreSQL, if used)
- **Payments**: Stripe Checkout & Webhooks

---

## Getting Started

### 1. Clone the Repository


### 2. Install Dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

---

### 3. Environment Variables

#### Backend (`server/.env`)

```env
PORT=8080
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
CLIENT_URL=http://localhost:5173
DATABASE_URL=your_database_url # if using a DB
```

#### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:8080
```

---

### 4. Running the Project

#### Start Backend

```sh
cd server
npm run dev
```

#### Start Frontend

```sh
cd ../client
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8080](http://localhost:8080)

---

## Stripe Setup

### 1. Create a Stripe Account

- Go to [Stripe Dashboard](https://dashboard.stripe.com/)
- Get your **Secret Key** and **Webhook Secret**

### 2. Configure Stripe Webhook (for Pro plan payment success/cancel)

#### a. Start your backend server


#### You need to setup Stripe CLI before doing that 

#### b. In a new terminal, use the Stripe CLI:

```sh
stripe listen --forward-to localhost:8080/webhook
```

#### c. Copy the webhook secret from the CLI output and add it to your `.env` as `STRIPE_WEBHOOK_SECRET`.

---

## API Endpoints

- `POST /api/register`  
  Registers a user for Free or Pro plan. For Pro, returns a Stripe Checkout URL.

- `POST /api/webhook`  
  Stripe webhook endpoint for payment events.

---

## Success & Cancel Pages

- After successful payment, users are redirected to:  
  `http://localhost:5173/success?email=EMAIL&username=USERNAME`

- If payment is cancelled:  
  `http://localhost:5173/cancel`

---

## Folder Structure

```
NEWSPAPER/
  client/      # React frontend
  server/      # Node.js backend
  .env         # Environment variables (add to .gitignore)
  Readme.md
```

---

## Customization

- Update newsletter content, features, and branding in the React components.
- Extend backend for email notifications, admin dashboard, or database integration.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## License

[MIT](LICENSE)

---

## Contact

For questions or support, open an issue or contact [your-email@example.com](mailto:your-email@example.com).