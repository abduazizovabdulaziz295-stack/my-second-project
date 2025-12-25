import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      products: "Products",
      football: "Football",
      skims: "Skims",
      contact: "Contact",
      forsale: "For Sale",
      shopNow: "Shop Now",
      slides: [
        {
          title: "LeBron James (87)",
          description: "Experience the legendary comfort and timeless style of the Air Max 90."
        },
        {
          title: "DELLE ALLI",
          description: "Engineered for speed, designed for comfort — run your best every day."
        },
        {
          title: "RUN WITH CONFIDENCE",
          description: "Engineered for speed, designed for comfort — run your best every day."
        },
        {
          title: "JUST DO IT",
          description: "Push your limits — your only competition is yourself."
        }
      ]
    }
  },
  ru: {
    translation: {
      home: "Главная",
      products: "Продукты",
      football: "Футбол",
      skims: "Скимы",
      contact: "Контакты",
      forsale: "Продажа",
      shopNow: "Купить",
      slides: [
        {
          title: "Леброн Джеймс (87)",
          description: "Ощутите легендарный комфорт и вечный стиль Air Max 90."
        },
        {
          title: "Делле Алли",
          description: "Разработано для скорости, создано для комфорта — бегайте лучше каждый день."
        },
        {
          title: "БЕГИТЕ С УВЕРЕННОСТЬЮ",
          description: "Разработано для скорости, создано для комфорта — бегайте лучше каждый день."
        },
        {
          title: "JUST DO IT",
          description: "Превзойдите свои пределы — ваш единственный соперник — это вы сами."
        }
      ]
    }
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      products: "Mahsulotlar",
      football: "Futbol",
      skims: "Skimlar",
      contact: "Aloqa",
      forsale: "Sotuv",
      shopNow: "Sotib olish",
      slides: [
        {
          title: "LeBron James (87)",
          description: "Air Max 90 ning afsonaviy qulayligi va zamonaviy uslubini his eting."
        },
        {
          title: "DELLE ALLI",
          description: "Tezlik uchun ishlab chiqilgan, qulaylik uchun mo‘ljallangan — har kuni eng yaxshisini bajaring."
        },
        {
          title: "Ishonch bilan yugur",
          description: "Tezlik uchun ishlab chiqilgan, qulaylik uchun mo‘ljallangan — har kuni eng yaxshisini bajaring."
        },
        {
          title: "JUST DO IT",
          description: "Chegaralaringizni oshiring — yagona raqobatchingiz — siz o‘zingiz."
        }
      ]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});


export default i18n;
