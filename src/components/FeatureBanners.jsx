import React from "react";

const Banner = ({ icon, title, subtitle, accent = "bg-red-500" }) => (
  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-4 md:p-6 w-full max-w-xs shadow-[0_8px_30px_rgba(255,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(255,0,0,0.12)] transition">
    <div
      className={`flex items-center justify-center w-14 h-14 rounded-lg ${accent} text-white text-xl flex-shrink-0 shadow-md`}
      aria-hidden
    >
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold text-white leading-tight">{title}</h4>
      <p className="text-sm text-gray-300 mt-1">{subtitle}</p>
    </div>
  </div>
);

const FeatureBanners = () => {
  return (
    <section aria-label="site-features" className="py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Why shop with us?</h3>
          <p className="text-sm text-gray-300 mt-2">
            Quality gear, fast delivery and hot deals — crafted for athletes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <Banner
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2 5 5 .5-4 3 1.2 5L12 14l-4.2 1.5L9 10 5 7.1 10 6z" /></svg>}
            title="🏆 Best Quality"
            subtitle="Premium materials & tested performance."
            accent="bg-gradient-to-tr from-yellow-500 to-orange-400"
          />

          <Banner
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h2l.4 2M7 7h10l2 6H5.4M7 7L6 4H4M16 17a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" /></svg>}
            title="🚚 Free Delivery"
            subtitle="On orders over $100 — fast & insured shipping."
            accent="bg-gradient-to-tr from-green-500 to-teal-400"
          />

          <Banner
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="💸 30% Off This Week"
            subtitle="Limited time deals — grab your size before it's gone."
            accent="bg-gradient-to-tr from-red-500 to-pink-500"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBanners;
