import React from "react";
import { useTranslation } from 'react-i18next';

const PromoBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-gradient-to-r from-black via-red-800 to-black text-white text-center py-20 px-6 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t('blackFriday')}</h1> 
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">{t('limitedOffer', { brand: "Nike" })}</p>
        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition">{t('shopNow')}</button>
      </div>
    </section>
  );
};

export default PromoBanner;
