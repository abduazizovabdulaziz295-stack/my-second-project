import React, { useState } from "react";
import { useCart } from "../context/CartContext";


const forSaleProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description: "Comfortable lifestyle sneakers with a bold Air unit design.",
    price: 180,
    image: "",
    colors: ["#000000", "#ffffff", "#ff0000"],
  },
  {
    id: 2,
    name: "Nike LeBron James XXIII",
    description: "Sport streetwear sneakers with iconic style and comfort.",
    price: 160,
    image: "",
    colors: ["#1e40af", "#000000", "#facc15"],
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    description: "Timeless basketball-inspired sneakers.",
    price: 80,
    image: "",
    colors: ["#ffffff", "#e5e7eb", "#000000"],
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    description: "Classic low-top sneakers for everyday wear.",
    price: 110,
    image: "",
    colors: ["#000000", "#ffffff", "#22c55e"],
  },
  {
    id: 5,
    name: "Nike Air Jordan 1 Mid",
    description: "Iconic Jordan style with modern comfort.",
    price: 140,
    image: "",
    colors: ["#dc2626", "#000000", "#ffffff"],
  },
  {
    id: 6,
    name: "Nike Air Max 90",
    description: "Retro running style with visible Air cushioning.",
    price: 130,
    image: "",
    colors: ["#6b7280", "#ffffff", "#000000"],
  },
  {
    id: 7,
    name: "Nike React Infinity Run",
    description: "Designed for comfort and injury prevention.",
    price: 160,
    image: "",
    colors: ["#2563eb", "#000000", "#ffffff"],
  },
  {
    id: 8,
    name: "Nike ZoomX Vaporfly",
    description: "Elite racing shoes for maximum speed.",
    price: 250,
    image: "",
    colors: ["#f97316", "#000000", "#ffffff"],
  },
  {
    id: 9,
    name: "Nike Pegasus 40",
    description: "Daily running shoes with responsive cushioning.",
    price: 130,
    image: "",
    colors: ["#0ea5e9", "#ffffff", "#000000"],
  },
  {
    id: 10,
    name: "Nike Blazer Mid '77",
    description: "Vintage basketball style reimagined.",
    price: 100,
    image: "",
    colors: ["#ffffff", "#000000", "#ef4444"],
  },
  {
    id: 11,
    name: "Nike Air Max Plus",
    description: "Aggressive design with Tuned Air technology.",
    price: 170,
    image: "",
    colors: ["#7c3aed", "#000000", "#ffffff"],
  },
  {
    id: 12,
    name: "Nike Free Run 5.0",
    description: "Natural feel for flexible movement.",
    price: 100,
    image: "",
    colors: ["#22c55e", "#000000", "#ffffff"],
  },
  {
    id: 13,
    name: "Nike Air Zoom Structure",
    description: "Stability running shoes with responsive Zoom Air.",
    price: 140,
    image: "",
    colors: ["#2563eb", "#ffffff", "#000000"],
  },
  {
    id: 14,
    name: "Nike Metcon 9",
    description: "High-performance training shoes.",
    price: 150,
    image: "",
    colors: ["#000000", "#f97316", "#ffffff"],
  },
  {
    id: 15,
    name: "Nike Air Huarache",
    description: "Street-ready comfort with snug fit.",
    price: 120,
    image: "",
    colors: ["#000000", "#ffffff", "#3b82f6"],
  },
  {
    id: 16,
    name: "Nike Cortez",
    description: "Classic running silhouette turned lifestyle icon.",
    price: 90,
    image: "",
    colors: ["#ffffff", "#dc2626", "#000000"],
  },
  {
    id: 17,
    name: "Nike Air Max SC",
    description: "Simple, comfortable and versatile design.",
    price: 85,
    image: "",
    colors: ["#9ca3af", "#000000", "#ffffff"],
  },
  {
    id: 18,
    name: "Nike Revolution 6",
    description: "Affordable everyday running shoes.",
    price: 70,
    image: "",
    colors: ["#000000", "#2563eb", "#ffffff"],
  },
  {
    id: 19,
    name: "Nike Zoom Fly 5",
    description: "Fast feel with responsive foam.",
    price: 170,
    image: "",
    colors: ["#facc15", "#000000", "#ffffff"],
  },
  {
    id: 20,
    name: "Nike Air Max Excee",
    description: "Modern take on a classic Air Max look.",
    price: 95,
    image: "",
    colors: ["#ffffff", "#000000", "#ef4444"],
  },
  {
    id: 21,
    name: "Nike Downshifter 12",
    description: "Lightweight running shoes for daily use.",
    price: 65,
    image: "",
    colors: ["#22c55e", "#000000", "#ffffff"],
  },
  {
    id: 22,
    name: "Nike Air Zoom Pegasus Trail",
    description: "Trail-ready running shoes.",
    price: 145,
    image: "",
    colors: ["#92400e", "#000000", "#ffffff"],
  },
  {
    id: 23,
    name: "Nike Air Max Alpha Trainer",
    description: "Stability and support for gym workouts.",
    price: 110,
    image: "",
    colors: ["#000000", "#3b82f6", "#ffffff"],
  },
  {
    id: 24,
    name: "Nike SB Dunk Low",
    description: "Skate-inspired sneakers with premium feel.",
    price: 120,
    image: "",
    colors: ["#16a34a", "#000000", "#ffffff"],
  },
  {
    id: 25,
    name: "Nike Air Jordan 1 Low",
    description: "Low-cut version of the iconic Jordan 1.",
    price: 130,
    image: "",
    colors: ["#dc2626", "#ffffff", "#000000"],
  },
  {
    id: 26,
    name: "Nike Air Zoom GT Cut",
    description: "Basketball shoes built for quick cuts.",
    price: 170,
    image: "",
    colors: ["#7c3aed", "#000000", "#ffffff"],
  },
  {
    id: 27,
    name: "Nike Air Presto",
    description: "Sock-like fit with lightweight comfort.",
    price: 120,
    image: "",
    colors: ["#000000", "#ffffff", "#22c55e"],
  },
  {
    id: 28,
    name: "Nike Zoom Freak",
    description: "Giannis-inspired basketball shoes.",
    price: 135,
    image: "",
    colors: ["#1e40af", "#000000", "#ffffff"],
  },
  {
    id: 29,
    name: "Nike Air Max Flyknit",
    description: "Breathable Flyknit upper with Air cushioning.",
    price: 160,
    image: "",
    colors: ["#0ea5e9", "#000000", "#ffffff"],
  },
  {
    id: 30,
    name: "Nike Lunar Roam",
    description: "Soft Lunar foam for all-day comfort.",
    price: 125,
    image: "",
    colors: ["#9ca3af", "#000000", "#ffffff"],
  },
  {
    id: 31,
    name: "Nike Air Max Pulse",
    description: "Street-inspired design with soft cushioning.",
    price: 150,
    image: "",
    colors: ["#000000", "#ef4444", "#ffffff"],
  },
  {
    id: 32,
    name: "Nike Flex Experience",
    description: "Minimalist running shoes for flexibility.",
    price: 75,
    image: "",
    colors: ["#22c55e", "#ffffff", "#000000"],
  },
  {
    id: 33,
    name: "Nike Court Vision Low",
    description: "Basketball-inspired casual sneakers.",
    price: 85,
    image: "",
    colors: ["#ffffff", "#000000", "#2563eb"],
  },
  {
    id: 34,
    name: "Nike Air Max SYSTM",
    description: "Modern Air Max look with lightweight feel.",
    price: 110,
    image: "",
    colors: ["#000000", "#6b7280", "#ffffff"],
  },
  {
    id: 35,
    name: "Nike Air Max Terrascape",
    description: "Sustainable materials with Air Max comfort.",
    price: 180,
    image: "",
    colors: ["#14532d", "#000000", "#ffffff"],
  },
];


const ForSale = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addToCart({ ...selectedProduct, color: selectedColor });
    setSelectedProduct(null);
    setShowRegister(true); 
  };

  return (
    <section className="relative text-white py-20 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4500] via-[#ff0000] to-[#330000] blur-3xl opacity-40"></div>
      <div className="relative max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-widest">
          FOR SALE 🔥
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {forSaleProducts.map((item) => (
            <div
              key={item.id}
              className="w-[300px] bg-[#1a1a1a]/80 rounded-2xl p-6 flex flex-col items-center
                         shadow-[0_0_25px_rgba(255,0,0,0.25)]
                         hover:shadow-[0_0_45px_rgba(255,100,0,0.6)]
                         transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[220px] h-[220px] object-contain mb-6"
              />
              <h3 className="text-lg font-semibold text-center mb-2">
                {item.name}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-3 line-clamp-2">
                {item.description}
              </p>
              <p className="text-xl font-bold mb-4 text-orange-400">
                ${item.price}
              </p>
              <button
                onClick={() => {
                  setSelectedProduct(item);
                  setSelectedColor(item.colors ? item.colors[0] : null);
                }}
                className="w-full py-2 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[90%] sm:w-[420px] rounded-2xl p-6 relative
                          shadow-[0_0_40px_rgba(255,100,0,0.7)]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-2xl hover:text-orange-400"
            >
              ✖
            </button>
            <img
              src={selectedProduct.image}
              className="w-full h-[240px] object-contain mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <p className="text-xl font-bold text-orange-400 mb-4">
              ${selectedProduct.price}
            </p>

            <div className="mb-6">
              <p className="mb-3 font-semibold">Choose color:</p>
              <div className="flex gap-4">
                {selectedProduct.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition
                      ${
                        selectedColor === color
                          ? "ring-4 ring-orange-500 scale-110"
                          : "border-gray-400"
                      }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition"
            >
              Add to Cart & Register
            </button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[90%] sm:w-[400px] rounded-2xl p-6 relative">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-3 right-4 text-2xl hover:text-orange-400"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">
              Registration
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              Please register to complete your purchase!
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-full mb-3 p-2 rounded bg-[#222] text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 rounded bg-[#222] text-white"
            />
            <button className="w-full py-2 bg-orange-600 rounded-xl font-bold hover:bg-orange-700 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForSale;
