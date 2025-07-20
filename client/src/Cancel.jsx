import React from "react";

const Cancel = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
    <h1 className="text-3xl font-bold mb-4 text-red-700">Payment Cancelled</h1>
    <p className="mb-6">Your payment was cancelled or failed. No changes have been made.</p>
    <a href="/" className="text-red-600 underline">Back to Home</a>
  </div>
);

export default Cancel;