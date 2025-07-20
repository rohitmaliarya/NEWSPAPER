import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const username = searchParams.get("username");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Payment Successful!</h1>
      <p className="mb-2">Thank you, <span className="font-semibold">{username}</span>!</p>
      <p className="mb-6">A confirmation has been sent to <span className="font-mono">{email}</span>.</p>
      <a href="/" className="text-blue-600 underline">Back to Home</a>
    </div>
  );
};

export default Success;