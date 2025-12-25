import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nike Store</h2>
          <p className="text-sm text-gray-400">
            Premium quality sportswear and sneakers. Designed for performance,
            crafted for comfort.
          </p>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

 
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nike Store — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
