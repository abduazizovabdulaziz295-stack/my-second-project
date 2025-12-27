import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBanners from "./components/FeatureBanners";
import Products from "./components/Products";
import Football from "./components/Football";
import Skims from "./components/Skims";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ForSale from "./components/ForSale";
import Checkout from ".//pages/Checkout";
import Success from ".//pages/Success";



function AppContent() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const val = !darkMode;
    setDarkMode(val);
    document.documentElement.classList.toggle("dark", val);
    localStorage.setItem("darkMode", val);
  };


  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500">

      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Navbar
        search={search}
        setSearch={setSearch}
        cartItems={cartItems}
        setCartOpen={setCartOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeatureBanners />
            </>
          }
        />
        <Route
          path="/products"
          element={<Products search={search} addToCart={addToCart} />}
        />
        <Route
          path="/football"
          element={<Football addToCart={addToCart} />}
        />
        <Route path="/skims" element={<Skims />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forsale" element={<ForSale />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />


      {cartOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[95%] sm:w-[520px] rounded-2xl p-6 relative">
            <button
              onClick={() => setCartOpen(false)}
              className="absolute top-3 right-4 text-2xl hover:text-red-500"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-red-500">
              🛒 Shopping Cart
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-400">Savatcha bo‘sh</p>
            ) : (
              <>
                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-[#222] p-3 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-red-400 font-semibold">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 font-bold"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-4 text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-red-500">${totalPrice}</span>
                </div>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                  className="w-full mt-6 py-3 bg-red-600 rounded-xl font-bold hover:bg-red-700"
                >
                  BUY / CHECKOUT
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
