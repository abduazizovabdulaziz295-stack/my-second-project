import React from "react";

const USPBar = () => {
  const items = [
    { icon: "🚚", title: "Free Shipping", desc: "Orders over $50" },
    { icon: "🔄", title: "Free Returns", desc: "30 days return policy" },
    { icon: "🔐", title: "Secure Payment", desc: "100% protected" },
    { icon: "⚡", title: "Fast Delivery", desc: "2–5 business days" },
  ];

  return (
    <section className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 justify-center"
          >
            <span className="text-3xl">{i.icon}</span>
            <div>
              <p className="font-bold">{i.title}</p>
              <p className="text-gray-400 text-sm">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default USPBar;
