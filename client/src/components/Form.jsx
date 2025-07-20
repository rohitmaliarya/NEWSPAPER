import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Free");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        username,
        email,
        plan,
      });

      if (res.data.url) {
        // For Pro plan, redirect to Stripe Checkout
        window.location.href = res.data.url;
      } else {
        alert("Free plan user registered!");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="Free">Free</option>
        <option value="Pro">Pro</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
