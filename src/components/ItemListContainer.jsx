import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Banner } from "./Banner";
import { Destacados } from "./Destacados";
import { getCategories } from "../async";

export function ItemListContainer() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error getting categories:", error);
      });
  }, []);

  // Imagen según la categoría
  const getCategoryImage = (categoryName) => {
    const categoryImages = {
      electronics: "/electronics.webp",
      jewelery: "/jewelery.webp",
      "men's clothing": "/mens-clothing.webp",
      "women's clothing": "/womens-clothing.webp",
    };

    return categoryImages[categoryName] || "/logo.png";
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <>
      <Banner />
      <section className="py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Categoria de Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories.map((categoryName, index) => (
              <div
                className="relative rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden group h-80 bg-cover bg-center bg-no-repeat cursor-pointer"
                key={index}
                onClick={() => handleCategoryClick(categoryName)}
                style={{
                  backgroundImage: `url(${getCategoryImage(categoryName)})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {categoryName}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(categoryName);
                    }}
                    className="inline-block bg-white/10 border border-white text-white rounded-full px-6 py-2 font-semibold hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition text-center"
                  >
                    ¡Compra ahora!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Destacados />
      </section>
    </>
  );
}
