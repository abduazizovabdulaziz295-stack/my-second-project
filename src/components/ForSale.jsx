import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const forSaleProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description: "Comfortable lifestyle sneakers with a bold Air unit design.",
    price: 18,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_1027,c_limit/3d52acef-6743-4ccd-8045-6d7af1b7452c/air-superfly-womens-shoes-QN4BTbYU.png",
    colors: ["#000000", "#ffffff", "#ff0000"],
  },
  {
    id: 2,
    name: "Nike LeBron James XXIII",
    description: "Sport streetwear sneakers with iconic style and comfort.",
    price: 160,
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/aea0072d-5f4e-4aa8-b686-cd1a64d3d92f/LEBRON+XXIII+LUX.png",
    colors: ["#1e40af", "#000000", "#facc15"],
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    description: "Timeless basketball-inspired sneakers.",
    price: 80,
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f7f531a6-148e-4ed6-b373-42d02843523a/M+COURT+LITE+4+HC+PRM.png",
    colors: ["#ffffff", "#e5e7eb", "#000000"],
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
    setShowRegister(true); // ochilsin registratsiya modal
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

      {/* Product Modal */}
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

      {/* Registration Modal */}
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
