import React from "react";

const Skims = () => {
  const stores = [
    {
      name: "Nike Soho — New York",
      img: "https://static.nike.com/a/images/f_auto/927babf3-1a8a-4c29-a667-64922165d210/image.jpg",
    },
    {
      name: "Nike Santa Monica",
      img: "https://static.nike.com/a/images/f_auto/6f034cb9-1504-47b5-a958-913161d24129/image.jpg",
    },
    {
      name: "Nike Aventura",
      img: "https://static.nike.com/a/images/f_auto/fb8cddd6-7d2c-4a5f-8318-751a7ca9e0f9/image.jpg",
    },
    {
      name: "Nike Seoul",
      img: "https://static.nike.com/a/images/f_auto/ba5502d7-e73e-4541-86bd-6dacae52d32d/image.jpg",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-10 px-4 flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold text-center mb-10">
        NIKE SKIMS — STORES GALLERY
      </h1>

      <div className="flex flex-col gap-12 w-full max-w-5xl">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              src={store.img}
              alt={store.name}
              className="w-full h-[450px] object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-black text-2xl font-semibold">{store.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skims;
