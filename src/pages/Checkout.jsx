import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Savatcha bo‘sh 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#111] p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-red-500">
          Checkout
        </h1>

        <div className="space-y-4 mb-8">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#222] p-3 rounded-xl"
            >
              <span>{item.name}</span>
              <span className="text-red-400">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total:</span>
          <span className="text-red-500">${total}</span>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Address"
            className="w-full p-3 rounded-xl bg-black border border-gray-700"
          />
          <input
            placeholder="Phone"
            className="w-full p-3 rounded-xl bg-black border border-gray-700"
          />

          <button
            onClick={() => {
              localStorage.removeItem("cart");
              navigate("/success");
            }}
            className="w-full py-3 bg-red-600 rounded-xl font-bold hover:bg-red-700"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
