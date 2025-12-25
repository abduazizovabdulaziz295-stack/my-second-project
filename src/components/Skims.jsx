import React, { useState } from "react";

const Skims = () => {
  const [openMapIndex, setOpenMapIndex] = useState(null);

  const stores = [
    {
      name: "Nike Soho — New York",
      img: "https://static.nike.com/a/images/f_auto/927babf3-1a8a-4c29-a667-64922165d210/image.jpg",
      map: "https://www.google.com/maps?q=Nike+SoHo+New+York&output=embed",
    },
    {
      name: "Nike Santa Monica",
      img: "https://static.nike.com/a/images/f_auto/6f034cb9-1504-47b5-a958-913161d24129/image.jpg",
      map: "https://www.google.com/maps?q=Nike+Santa+Monica&output=embed",
    },
    {
      name: "Nike Aventura",
      img: "https://static.nike.com/a/images/f_auto/fb8cddd6-7d2c-4a5f-8318-751a7ca9e0f9/image.jpg",
      map: "https://www.google.com/maps?q=Nike+Aventura+Mall&output=embed",
    },
    {
      name: "Nike Seoul",
      img: "https://static.nike.com/a/images/f_auto/ba5502d7-e73e-4541-86bd-6dacae52d32d/image.jpg",
      map: "https://www.google.com/maps?q=Nike+Seoul&output=embed",
    },
  ];

  const toggleMap = (index) => {
    setOpenMapIndex(openMapIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen py-10 px-4 flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold text-center mb-10">
        NIKE SKIMS — STORES GALLERY
      </h1>

      <div className="flex flex-col gap-12 w-full max-w-5xl">
        {stores.map((store, index) => (
          <div key={index}>
            <div
              onClick={() => toggleMap(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <img
                src={store.img}
                alt={store.name}
                className="w-full h-[450px] object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-black text-2xl font-semibold">
                  {store.name}
                </h2>
                <p className="text-gray-500 mt-2">
                  📍 Xarita ko‘rish uchun bosing
                </p>
              </div>
            </div>

            {openMapIndex === index && (
              <div className="mt-4 rounded-2xl overflow-hidden border border-gray-700">
                <iframe
                  src={store.map}
                  width="100%"
                  height="350"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skims;
