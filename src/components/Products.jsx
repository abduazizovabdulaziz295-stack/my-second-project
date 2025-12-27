import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Products = ({ search = "", addToCart }) => {
  const { t } = useTranslation();

  const PRODUCTS_API = "https://6882118366a7eb81224d4b50.mockapi.io/reactcrud";

  const [products, setProducts] = useState([]);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [message, setMessage] = useState("");


  const [wishlist, setWishlist] = useState([]);
  const [sortType, setSortType] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const newArrivals = [
    { id: 101, name: "Nike Dri-FIT Miler", description: "Men's Short-Sleeve Running Top", price: 35, image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b37f223e-0d70-48c0-b001-9936564f9f02/M+NK+DF+MILER+TOP+SS.png", colors: ["red","blue","green"], badge: "NEW", rating: 5 },
    { id: 102, name: "Nike SB", description: "Essential Skate Shirt Jacket", price: 60, image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ec4d8528-1373-4961-8616-269a134ec4d9/U+NK+SB+ESSNTL+STRTDYMRN+SHCKT.png", colors: ["yellow","black","white"], badge: "LIMITED", rating: 4 },
  ];

  const clothes = [
    { id: 201, name: "Adidas Hoodie", description: "Comfortable hoodie for everyday wear", price: 45, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/b1270471-9331-4b13-951e-31f99363a1e7/M+NRG+NOCTA+CS+PANT+FLC.png", colors: ["black","gray","white"], badge: "NEW", rating: 4 },
    { id: 202, name: "Puma T-Shirt", description: "Lightweight sports t-shirt", price: 25, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6f53baf3-8961-454e-be8b-d52f2f1e646c/M+NK+TF+CLUB+PUFFER+JACKET+650.png", colors: ["red","blue","green"], rating: 3 },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(PRODUCTS_API);
      const withExtras = res.data.map((p) => ({
        ...p,
        rating: Math.floor(Math.random() * 2) + 4,
        badge: Math.random() > 0.7 ? "NEW" : null,
      }));
      setProducts(withExtras);
    } catch {
      setProducts([]);
    }
  };


  const processList = (list) => {
    let data = [...list];

    if (priceFilter === "low") data = data.filter((i) => i.price < 50);
    if (priceFilter === "high") data = data.filter((i) => i.price >= 50);

    if (sortType === "az") data.sort((a, b) => a.name.localeCompare(b.name));
    if (sortType === "price") data.sort((a, b) => a.price - b.price);

    return data.filter((i) =>
      i.name?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({ ...selectedProduct, color: selectedColor });
      setMessage(t("addedToCart"));
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const renderStars = (count) =>
    "★★★★★☆☆☆☆☆".slice(5 - count, 10 - count);

  const renderProductCard = (item) => (
    <div
      key={item.id}
      className="relative bg-[#111] rounded-2xl p-6 w-[280px] shadow-[0_0_20px_rgba(255,0,0,0.2)]"
    >
      {item.badge && (
        <span className="absolute top-3 left-3 bg-red-600 px-3 py-1 text-xs rounded-full">
          {item.badge}
        </span>
      )}

      <button
        onClick={() => toggleWishlist(item.id)}
        className="absolute top-3 right-3 text-xl"
      >
        {wishlist.includes(item.id) ? "❤️" : "🤍"}
      </button>

      <img src={item.image} className="w-[220px] h-[220px] object-contain mx-auto mb-4" />

      <h3 className="text-lg font-bold text-center">{item.name}</h3>
      <p className="text-gray-400 text-sm text-center mb-2">{item.description}</p>

      <p className="text-yellow-400 text-center mb-2">
        {renderStars(item.rating)}
      </p>

      <p className="text-red-400 text-center font-bold mb-4">${item.price}</p>

      <button
        onClick={() => {
          setSelectedProduct(item);
          setSelectedColor(item.colors?.[0]);
        }}
        className="w-full py-2 bg-red-600 rounded-xl"
      >
        {t("view")}
      </button>
    </div>
  );

  return (
    <section className="bg-[#0f0f0f] text-white py-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="flex justify-between mb-10">
          <select onChange={(e) => setPriceFilter(e.target.value)} className="bg-black p-2 rounded">
            <option value="all">All Prices</option>
            <option value="low">Below $50</option>
            <option value="high">Above $50</option>
          </select>

          <select onChange={(e) => setSortType(e.target.value)} className="bg-black p-2 rounded">
            <option value="">Default</option>
            <option value="az">A–Z</option>
            <option value="price">By Price</option>
          </select>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-red-500">{t("products")}</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {processList(products).map(renderProductCard)}
        </div>

        <h2 className="text-4xl font-bold my-10 text-red-500">{t("newArrivals")}</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {processList(newArrivals).map(renderProductCard)}
        </div>

        <h2 className="text-4xl font-bold my-10 text-red-500">{t("clothes")}</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {processList(clothes).map(renderProductCard)}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[420px] rounded-2xl p-6 relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-4">✖</button>
            <img src={selectedProduct.image} className="h-[240px] mx-auto mb-4" />
            <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <button onClick={handleAddToCart} className="w-full bg-red-600 py-3 rounded-xl">
              {t("addToCart")}
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

export default Products;
