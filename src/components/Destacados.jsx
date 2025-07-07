import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../async";

export function Destacados() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.slice(1, 5));
      })
      .catch((error) => {
        console.error("Error getting products:", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item.id)}
              className="bg-[#2f3847] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden hover:-translate-y-2 transition flex flex-col h-full cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#8ed1fc] font-bold mb-4">${item.price}</p>
                <button className="inline-block border-2 border-[#8ed1fc] text-[#8ed1fc] rounded-full px-6 py-2 font-semibold hover:bg-[#8ed1fc] hover:text-white transition mt-auto text-center cursor-pointer">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
