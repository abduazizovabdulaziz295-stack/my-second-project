import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-green-500 mb-4">
        ✅ Order Successful
      </h1>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 rounded-xl font-bold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
