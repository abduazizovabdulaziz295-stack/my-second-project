import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ search, setSearch, cartItems = [], setCartOpen }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg p-4 flex justify-between items-center">
      
      {/* LINKS */}
      <div className="flex gap-6">
        <Link to="/" className="text-white font-semibold hover:text-gray-300">
          🏠 {t("home")}
        </Link>
        <Link to="/products" className="text-white font-semibold hover:text-gray-300">
          🛍 {t("products")}
        </Link>
        <Link to="/football" className="text-white font-semibold hover:text-gray-300">
          ⚽ {t("football")}
        </Link>
        <Link to="/skims" className="text-white font-semibold hover:text-gray-300">
          🎮 {t("skims")}
        </Link>
        <Link to="/contact" className="text-white font-semibold hover:text-gray-300">
          📞 {t("contact")}
        </Link>
        <Link to="/forsale" className="text-white font-semibold hover:text-gray-300">
          💰 {t("forsale")}
        </Link>
      </div>

 
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="px-3 py-1 rounded-lg text-black"
        />


        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-red-500 px-4 py-2 rounded-full text-white font-bold hover:bg-red-600 transition"
        >
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-red-500 w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
              {cartItems.length}
            </span>
          )}
        </button>

        <div className="flex gap-2 ml-4">
          <button onClick={() => changeLanguage("uz")} className="px-2 py-1 bg-gray-200 rounded">
            UZ
          </button>
          <button onClick={() => changeLanguage("ru")} className="px-2 py-1 bg-gray-200 rounded">
            RU
          </button>
          <button onClick={() => changeLanguage("en")} className="px-2 py-1 bg-gray-200 rounded">
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
