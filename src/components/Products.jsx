import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Products = ({ search = "", addToCart }) => {
  const { t } = useTranslation();

  const PRODUCTS_API = "https://6882118366a7eb81224d4b50.mockapi.io/reactcrud";

  const [products, setProducts] = useState([]);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [message, setMessage] = useState("");

  const newArrivals = [
    { id: 101, name: "Nike Dri-FIT Miler", description: "Men's Short-Sleeve Running Top", price: 35, image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b37f223e-0d70-48c0-b001-9936564f9f02/M+NK+DF+MILER+TOP+SS.png", colors: ["red","blue","green"] },
    { id: 102, name: "Nike SB", description: "Essential Skate Shirt Jacket", price: 60, image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ec4d8528-1373-4961-8616-269a134ec4d9/U+NK+SB+ESSNTL+STRTDYMRN+SHCKT.png", colors: ["yellow","black","white"] },
    { id: 103, name: "New Product 3", description: "Description 3", price: 55, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec8743fd-212b-42e2-a51c-eabb5f8f5c34/SUEDE+MONOGRAM+BACKPACK.png", colors: ["purple","pink","gray"] },
    { id: 104, name: "New Product 4", description: "Description 4", price: 65, image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1042f287-5c56-4c49-baaa-6f41b7440a91/M+NRG+CLUB+ST5+WSQK+PANT.png", colors: ["orange","blue","black"] },
    { id: 105, name: "New Product 5", description: "Description 5", price: 70, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a8ed32ed-bdaa-4db6-8648-28a0453c5f87/KB+M+NK+WINTERIZED+BOTTOM.png", colors: ["red","green","white"] },
    { id: 106, name: "New Product 6", description: "Description 6", price: 52, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bc713d7d-7dd5-45fe-8145-1740bc150c5f/M+J+BRK+OVS+FZ+HD.png", colors: ["blue","yellow","black"] },
    { id: 107, name: "New Product 7", description: "Description 7", price: 48, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/25f99ebc-a157-46f3-b8fe-619102eca24f/M+NK+TECH+SHORI+KNIT+DRILL+PNT.png", colors: ["gray","pink","red"] },
    { id: 108, name: "New Product 8", description: "Description 8", price: 59, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/08a90b55-801f-4e0a-9033-43e88e15df25/M+NK+TEE+LSE+OC+GOLF+SP26.png", colors: ["black","white","blue"] },
    { id: 109, name: "New Product 9", description: "Description 9", price: 62, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/4ad20944-512d-4cc9-9165-950cebdfaa7a/M+NK+DF+NAC+KNIT+SHORT+5IN.png", colors: ["orange","red","green"] },
    { id: 110, name: "New Product 10", description: "Description 10", price: 67, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/7c03a675-a26e-4a29-a7c4-38b3bd0a26d0/M+NK+CLUB+BB+CREW+JDI.png", colors: ["yellow","pink","gray"] },
    { id: 111, name: "New Product 11", description: "Description 11", price: 51, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b9212004-3b2c-4198-9933-5f614131e6e3/M+J+FLT+CLB+KNIT+FZ.png", colors: ["red","blue","white"] },
    { id: 112, name: "New Product 12", description: "Description 12", price: 54, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe551c3f-55f4-49a5-b5cb-13b35fb8ea51/M+J+BRK+FLC+CREW.png", colors: ["green","black","pink"] },
    { id: 113, name: "New Product 13", description: "Description 13", price: 58, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/bcb8826e-f7d2-4c7a-b303-0bc00b1d5ba0/KB+M+NK+WINTERIZED+TOP.png", colors: ["purple","yellow","gray"] },
    { id: 114, name: "New Product 14", description: "Description 14", price: 61, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/69b43aea-3440-48ad-96ea-76cd2517266f/USA+M+NK+AU+GOALKEEPER+SHIRT.png", colors: ["blue","red","black"] },
    { id: 115, name: "New Product 15", description: "Description 15", price: 66, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ec5272d1-3ee2-4e0b-9458-d1508f4ee148/M+NK+TEE+STD+TRAIN+MIND.png", colors: ["orange","white","green"] },
  ];

  const clothes = [
    { id: 201, name: "Adidas Hoodie", description: "Comfortable hoodie for everyday wear", price: 45, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/b1270471-9331-4b13-951e-31f99363a1e7/M+NRG+NOCTA+CS+PANT+FLC.png", colors: ["black","gray","white"] },
    { id: 202, name: "Puma T-Shirt", description: "Lightweight sports t-shirt", price: 25, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6f53baf3-8961-454e-be8b-d52f2f1e646c/M+NK+TF+CLUB+PUFFER+JACKET+650.png", colors: ["red","blue","green"] },
    { id: 203, name: "Nike Shorts", description: "Breathable running shorts", price: 30, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c2be3fb6-9ed0-4483-bc08-79fbdcb8a84c/M+NK+CLUB+BB+HZ+TOP.png", colors: ["black","blue","gray"] },
    { id: 204, name: "Reebok Sweatpants", description: "Casual sweatpants for comfort", price: 35, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/29d41e5b-6aad-41b7-857d-84618ce1a5f4/M+NK+TF+SHERPA+PANT+NAOS.png", colors: ["black","gray","blue"] },
    { id: 205, name: "Under Armour Jacket", description: "Lightweight windbreaker jacket", price: 55, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a0b5441e-9126-49f4-9210-6f00b25cd673/CC+U+NK+FLC+PO+HOODIE+PREM.png", colors: ["black","red","white"] },
    { id: 206, name: "Nike Cap", description: "Stylish cap for everyday use", price: 20, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/1c7e03c7-6e86-4dcb-99e1-6cf991f2880d/M+NK+DF+DNA+ACD+11IN+SHORT.png", colors: ["black","white","blue"] },
    { id: 207, name: "Adidas Socks", description: "Comfortable socks for sports", price: 12, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28651f91-f273-4f90-8aca-5235b1f8332c/M+NK+CLUB+BB+CUFF+JGGR+NEOVAR.png", colors: ["white","black","gray"] },
    { id: 208, name: "Puma Hoodie", description: "Cozy hoodie for casual wear", price: 48, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/cf716924-8cdd-4fec-a232-ba262bd77fec/M+NK+WINDRUNNER+STMNT+DWN+JKT.png", colors: ["blue","gray","black"] },
    { id: 209, name: "Nike Joggers", description: "Slim fit joggers for training", price: 40, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/84d4c8f3-be90-4ca0-9777-87ab7ae54f59/M+NL+SOLO+SWSH+BB+PO+HOODIE.png", colors: ["black","green","gray"] },
    { id: 210, name: "Reebok T-Shirt", description: "Breathable cotton t-shirt", price: 28, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/5f741c4d-cb8d-433d-acef-69881189a312/M+NK+CLUB+WINTERIZD+FZ+JKT.png", colors: ["white","blue","red"] },
    { id: 211, name: "Under Armour Shorts", description: "Comfortable gym shorts", price: 32, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d14ee1ad-e0aa-46e1-bc80-bd672ba0dcb3/M+NK+DF+TCH+WVN+OH+PANT.png", colors: ["black","gray","blue"] },
    { id: 212, name: "Nike Jacket", description: "Lightweight sports jacket", price: 60, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/7ad46342-0f8f-48ba-b297-d2acc9a6885d/M+NK+TECH+FLC+WR+FZ+JKT+REFLEC.png", colors: ["black","red","white"] },
    { id: 213, name: "Adidas Sweatshirt", description: "Casual sweatshirt for daily use", price: 50, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9d9e26c6-e148-4fdd-8afb-96d19c315c55/M+NL+WILDERNESS+SWEATER.png", colors: ["gray","black","blue"] },
    { id: 214, name: "Puma Cap", description: "Sporty cap for sunny days", price: 18, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/20686a31-b243-4089-8d4b-0025adeb46ab/M+NK+DFADV+STRIDE+TANK.png", colors: ["black","white","red"] },
    { id: 215, name: "Reebok Hoodie", description: "Warm hoodie for winter", price: 55, image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/2f189c06-db59-46ae-985d-69e7d52878b0/M+NP+DF+NPT+6IN+SHORT.png", colors: ["black","gray","green"] },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(PRODUCTS_API);
      setProducts(res.data || []);
    } catch {
      setProducts([]);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNew = newArrivals.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredClothes = clothes.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({ ...selectedProduct, color: selectedColor });
      setMessage(t("addedToCart"));
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const renderProductCard = (item) => (
    <div
      key={item.id}
      className="bg-[#111] rounded-2xl p-6 w-[280px] shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300"
    >
      <img src={item.image} className="w-[220px] h-[220px] object-contain mb-6 mx-auto" />
      <h3 className="text-xl font-bold text-center mb-2">{item.name}</h3>
      <p className="text-gray-400 text-sm text-center mb-3">{item.description}</p>
      <p className="text-lg font-semibold text-red-400 text-center mb-4">${item.price}</p>
      <button
        onClick={() => {
          setSelectedProduct(item);
          setSelectedColor(item.colors ? item.colors[0] : null);
        }}
        className="w-full py-2 bg-red-600 rounded-xl font-bold hover:bg-red-700"
      >
        {t("view")}
      </button>
    </div>
  );

  return (
    <section className="bg-[#0f0f0f] text-white py-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center mb-8 text-red-500">
          {t("products")}
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {filteredProducts.map(renderProductCard)}
        </div>

        <h2 className="text-4xl font-bold text-center mb-8 text-red-500">
          {t("newArrivals")}
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {filteredNew.map(renderProductCard)}
        </div>

        <h2 className="text-4xl font-bold text-center mb-8 text-red-500">
          {t("clothes")}
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {filteredClothes.map(renderProductCard)}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[420px] rounded-2xl p-6 relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-4 text-2xl">✖</button>

            <img src={selectedProduct.image} className="w-full h-[240px] object-contain mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <p className="text-xl font-bold text-red-400 mb-4">${selectedProduct.price}</p>

            {selectedProduct.colors && (
              <div className="mb-6">
                <p className="mb-3 font-semibold">{t("chooseColor")}</p>
                <div className="flex gap-4">
                  {selectedProduct.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "ring-4 ring-red-500" : "border-gray-400"}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            <button onClick={handleAddToCart} className="w-full py-3 bg-red-600 rounded-xl font-bold hover:bg-red-700">
              {t("addToCart")}
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-3 rounded-full">
          {message}
        </div>
      )}
 
<div className="max-w-[1400px] mx-auto px-6 mt-24">
  <h2 className="text-4xl font-extrabold mb-10">
    {t("relatedStories")}
  </h2>

  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
 
    <div className="min-w-[420px]">
      <img
        src="https://static.nike.com/a/images/t_prod/w_1920,c_limit/a2668875-b851-4bac-add3-848cdc3bd704/8-best-yoga-gifts-by-nike.jpg"
        className="rounded-xl mb-4 object-cover h-[260px] w-full"
      />
      <p className="text-gray-400 text-sm mb-1">{t("buyingGuide")}</p>
      <h3 className="text-xl font-bold">
        {t("8 gifts with yoga ")}
      </h3>
    </div>

 
    <div className="min-w-[420px]">
      <img
        src="https://static.nike.com/a/images/t_prod/w_1920,c_limit/b4f73db4-f8fe-4ecd-9c64-da9886c36cca/13-nike-tennis-gifts-for-players-of-all-levels.jpg"
        className="rounded-xl mb-4 object-cover h-[260px] w-full"
      />
      <p className="text-gray-400 text-sm mb-1">{t("buyingGuide")}</p>
      <h3 className="text-xl font-bold">
        {t("Nike best gifts for tennis")}
      </h3>
    </div>

 
    <div className="min-w-[420px]">
      <img
        src="https://static.nike.com/a/images/w_1920,c_limit/31a315bc-7173-46cd-9a64-7bf41c4e1e91/the-best-nike-beach-gifts.jpg"
        className="rounded-xl mb-4 object-cover h-[260px] w-full"
      />
      <p className="text-gray-400 text-sm mb-1">{t("buyingGuide")}</p>
      <h3 className="text-xl font-bold">
        {t("11 Bests with beach nike")}
      </h3>
    </div>
  </div>
</div>


    </section>
  );
};

export default Products;
