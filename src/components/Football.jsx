import React, { useState } from "react";
import "./Football.css";

const footballProducts = [
  {
    id: 1,
    name: "Nike Mercurial Superfly",
    description: "Lightweight boots for explosive speed on the pitch.",
    price: 249,
    image: "https://static.nike.com/a/images/t_default/5770b410-3cff-45bc-837f-0b89b294309f/NIKE+ALPHA+MENACE+DUNK+SE.png",
    colors: ["Red", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 2,
    name: "Nike Phantom GX Elite",
    description: "Precision and control for creative playmakers.",
    price: 219,
    image: "https://static.nike.com/a/images/t_default/2b6d8909-d5b6-446d-b2ae-5e51dd7788be/NIKE+VAPOR+EDGE+360+UT.png",
    colors: ["Blue", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 3,
    name: "Nike Tiempo Legend 10",
    description: "Classic leather comfort meets modern design.",
    price: 199,
    image: "https://static.nike.com/a/images/t_default/c9877e49-738f-4d39-9a7e-a28ab2445f46/NIKE+ZOOM+AIR+VAPOR+PRO+1.png",
    colors: ["Green", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 4,
    name: "Nike Air Zoom Mercurial Vapor 15",
    description: "Built for speed with responsive Zoom Air cushioning.",
    price: 229,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a309c311-383f-476a-80e9-e4eb567fb64b/ZOOM+VAPOR+16+ACADEMY+AG.png",
    colors: ["Orange", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 5,
    name: "Nike Mercurial Superfly 9 Elite",
    description: "Dynamic Fit collar for locked-in feel.",
    price: 259,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a84a4a76-5696-42cb-bba4-7236818ad3b5/REACTX+PHANTOM+6+LOW+PRO+TF.png",
    colors: ["Pink", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 6,
    name: "Nike Phantom Luna Elite",
    description: "Engineered for precision and agility.",
    price: 239,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/94101136-2115-4fc4-abb0-bb0b0b9afd11/PHANTOM+6+LOW+ACAD+FG%2FMG.png",
    colors: ["Purple", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 7,
    name: "Nike Phantom GX Academy",
    description: "Textured upper for enhanced ball control.",
    price: 149,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/f377e0f0-4a8f-49ba-8576-f2d9ae6af033/ZM+VAPOR+16+ELITE+AG-PRO.png",
    colors: ["Blue", "White", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 8,
    name: "Nike Tiempo Legend 9 Elite",
    description: "Premium kangaroo leather for elite touch.",
    price: 219,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d07dac91-e45c-4262-a1ae-0d8584553571/PHANTOM+GX+II+ELITE+FG+EH.png",
    colors: ["White", "Black", "Gold"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 9,
    name: "Nike Tiempo Legend Academy",
    description: "Classic feel with modern traction.",
    price: 139,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/1ac28c1e-c0f8-4ea3-b882-efd9fb4e4bb0/PHANTOM+6+LOW+ACD+EASYON+FG%2FMG.png",
    colors: ["Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 10,
    name: "Nike Zoom Vapor Edge Pro",
    description: "Explosive speed for quick cuts.",
    price: 199,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/cca6b224-6ed8-4af1-9e7d-6ea6641d69d3/ZOOM+VAPOR+16+ACADEMY+KM+AG.png",
    colors: ["Red", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
  },
];

const footballGallery = [
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/cca6b224-6ed8-4af1-9e7d-6ea6641d69d3/ZOOM+VAPOR+16+ACADEMY+KM+AG.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d07dac91-e45c-4262-a1ae-0d8584553571/PHANTOM+GX+II+ELITE+FG+EH.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/94101136-2115-4fc4-abb0-bb0b0b9afd11/PHANTOM+6+LOW+ACAD+FG%2FMG.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/f377e0f0-4a8f-49ba-8576-f2d9ae6af033/ZM+VAPOR+16+ELITE+AG-PRO.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ad61d6b4-1bea-4197-944a-3b72f2882ee1/LEGEND+10+PRO+TF.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/1ac28c1e-c0f8-4ea3-b882-efd9fb4e4bb0/PHANTOM+6+LOW+ACD+EASYON+FG%2FMG.png",
];

const Football = ({ addToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleAddToCart = () => {
    addToCart({ ...selectedProduct, color: selectedColor, size: selectedSize });
    setMessage(`${selectedProduct.name} savatga qo‘shildi!`);
    setTimeout(() => setMessage(""), 2000);
    closeModal();
  };

  return (
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#260202] text-white py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-red-500">
          NIKE FOOTBALL COLLECTION
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {footballProducts.map((item) => (
            <div key={item.id} className="bg-[#1b1b1b]/80 rounded-2xl p-6 w-[300px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-[220px] h-[220px] object-contain mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-center">{item.name}</h3>
              <p className="text-gray-400 text-sm text-center mb-3">
                {item.description}
              </p>
              <p className="text-red-400 text-center font-semibold mb-4">
                ${item.price}
              </p>
              <button
                onClick={() => openModal(item)}
                className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600"
              >
                View
              </button>
            </div>
          ))}
        </div>

        <div className="mt-28">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-500">
            FOOTBALL GALLERY
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {footballGallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-[220px] object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1b1b1b] p-6 rounded-2xl w-[400px] relative">
            <button onClick={closeModal} className="absolute top-3 right-4 text-xl">
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt=""
              className="w-full h-[250px] object-contain mb-4"
            />
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full mb-3 p-2 bg-[#2b2b2b]"
            >
              {selectedProduct.colors.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full mb-4 p-2 bg-[#2b2b2b]"
            >
              {selectedProduct.sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-3 rounded-full">
          {message}
        </div>
      )}
    </section>
  );
};

export default Football;
