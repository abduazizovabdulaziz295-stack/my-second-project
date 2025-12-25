import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        📩 Subscribe for Latest Updates
      </h2>
      <p className="text-gray-300 mb-8">
        Get exclusive offers, news, and product updates delivered to your inbox.
      </p>

      {subscribed ? (
        <p className="text-green-400 text-xl font-semibold">
          ✅ Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full md:w-1/3 px-5 py-3 rounded-full text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;
