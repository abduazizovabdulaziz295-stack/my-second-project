import React from "react";
import { useCart } from "../context/CartContext";

const trendingProducts = [
  {
    id: 301,
    name: "Nike Air Max 90",
    price: 120,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto/air-max-90.png",
    color: "black",
  },
  {
    id: 302,
    name: "Nike Dunk Low",
    price: 110,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto/dunk-low.png",
    color: "white",
  },
  {
    id: 303,
    name: "Nike Pegasus 40",
    price: 130,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto/pegasus-40.png",
    color: "blue",
  },
  {
    id: 304,
    name: "Nike Vaporfly",
    price: 250,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto/vaporfly.png",
    color: "green",
  },
];

const TrendingNow = () => {
  const { addToCart } = useCart();

  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14">
        🔥 Trending Now
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {trendingProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-2xl p-6 hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 mx-auto object-contain mb-6"
            />

            <h3 className="font-bold text-lg mb-2">{item.name}</h3>
            <p className="text-red-600 font-semibold mb-4">
              ${item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="w-full py-3 rounded-full bg-black text-white font-bold hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;
