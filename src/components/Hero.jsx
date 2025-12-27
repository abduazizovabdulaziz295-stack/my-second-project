import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      image:
        "https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/31855586-5b18-4e0b-8a40-1e680562b971/image.jpg",
      title: t("slides.0.title", "LeBron James (87)"),
      desc: t(
        "slides.0.desc",
        "Experience the legendary comfort and timeless style."
      ),
      badge: "LIMITED",
    },
    {
      image:
        "https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/e9bdaa66-3804-4142-8431-a56522ad4300/image.jpg",
      title: t("slides.1.title", "JUST DO IT"),
      desc: t("slides.1.desc", "Push your limits every single day."),
      badge: "NEW",
    },
    {
      image:
        "https://static.nike.com/a/images/w_1920,c_limit/f244b1ae-1fac-407d-a7be-46a2ea85c159/mercurial.jpg",
      title: t("slides.2.title", "RUN WITH CONFIDENCE"),
      desc: t("slides.2.desc", "Speed. Comfort. Control."),
      badge: "HOT",
    },
  ];

  const spotlightItems = [
    { name: t("spot.airmax", "Air Max"), img: "https://static.nike.com/a/images/w_144,c_limit/a37ad556-7b49-4e5f-9c15-11bcbda60157/image.png" },
    { name: t("spot.dunk", "Dunk"), img: "https://static.nike.com/a/images/w_144,c_limit/c0c9f51b-99a3-4022-98e3-6f8e4722c7f6/image.png" },
    { name: t("spot.collection", "24.7 Collection"), img: "https://static.nike.com/a/images/w_144,c_limit/c57376c0-0be6-49d4-8932-4f03c14282a7/image.png" },
    { name: t("spot.shox", "Shox"), img: "https://static.nike.com/a/images/w_144,c_limit/d9bc69e0-6bab-443f-9fb8-5b3ab9e63c51/image.png" },
    { name: t("spot.vomero", "Vomero 5"), img: "https://static.nike.com/a/images/w_144,c_limit/1785c60d-f43d-40de-905b-2c9ce8885c6b/image.png" },
    { name: t("spot.sabrina", "Sabrina 3"), img: "https://static.nike.com/a/images/w_144,c_limit/529fb054-51b1-4043-8381-62829aa3717c/image.png" },
    { name: t("spot.pegasus", "Pegasus Premium"), img: "https://static.nike.com/a/images/w_144,c_limit/2a50557f-1d8e-4c8d-a1a6-a69d9afca77b/image.png" },
    { name: t("spot.graphic", "Graphic Tees"), img: "https://static.nike.com/a/images/w_144,c_limit/913b34dd-bd4b-4f02-9a84-0b19a42b8943/image.png" },
  ];

  return (
    <section className="w-full overflow-hidden relative">
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[90vh]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-full bg-cover bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              {/* BADGE */}
              <span className="absolute top-8 left-8 bg-red-600 text-white px-5 py-1 rounded-full text-sm font-bold tracking-widest">
                {s.badge}
              </span>

              <div className="bg-black/60 p-10 rounded-2xl text-white max-w-xl">
                <h1 className="text-5xl font-extrabold mb-4">{s.title}</h1>
                <p className="mb-6">{s.desc}</p>

                {/* CTA BUTTONS */}
                <div className="flex gap-4 justify-center">
                  <Link
                    to="/products"
                    className="px-6 py-3 bg-red-600 rounded-full font-bold hover:bg-red-700"
                  >
                    {t("shopNow", "Shop Now")}
                  </Link>
                  <Link
                    to="/forsale"
                    className="px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-black transition"
                  >
                    {t("explore", "Explore")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs tracking-[0.3em] animate-bounce">
        ↓ SCROLL
      </div>

      {/* SPOTLIGHT */}
      <div className="bg-white py-24 px-6">
        <h2 className="text-6xl font-extrabold text-center mb-6">
          {t("spotlight.title", "SPOTLIGHT")}
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
          {t(
            "spotlight.desc",
            "Classic silhouettes and cutting-edge innovation to build your game from the ground up."
          )}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-12 max-w-7xl mx-auto">
          {spotlightItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-20 object-contain mb-4 group-hover:scale-110 transition"
              />
              <p className="font-semibold">{item.name}</p>
              <span className="mt-2 w-0 h-[2px] bg-black group-hover:w-full transition-all"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
