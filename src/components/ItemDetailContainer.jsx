import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ItemCount } from "./ItemCount";
import { getProductById } from "../async";

export function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado del contador aquí
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error getting product:", error);
        });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0f1419] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagen del producto */}
          <div className="flex justify-center">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full max-w-md h-auto object-contain bg-white rounded-xl p-8"
            />
          </div>

          {/* Detalles del producto */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              {product?.title}
            </h1>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#8ed1fc]">
                ${product?.price}
              </span>
              <span className="bg-[#2f3847] px-3 py-1 rounded-full text-sm capitalize">
                {product?.category}
              </span>
            </div>

            <div className="border-t border-[#2f3847] pt-6">
              <h3 className="text-xl font-semibold mb-3">Descripción</h3>
              <p className="text-gray-300 leading-relaxed">
                {product?.description}
              </p>
            </div>

            <div className="bg-[#2f3847] rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-3">Cantidad</h4>
              <ItemCount quantity={quantity} setQuantity={setQuantity} />

              {/* Precio total */}
              <div className="mt-3 pt-3 border-t border-[#0f1419]">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-bold text-[#8ed1fc]">
                    ${((product?.price || 0) * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-[#8ed1fc] text-[#0f1419] rounded-full px-8 py-3 font-semibold hover:bg-[#7bc3f0] transition flex items-center justify-center space-x-2 cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Agregar al carrito</span>
                <span className="bg-[#0f1419] text-[#8ed1fc] px-2 py-1 rounded-full text-sm">
                  {quantity}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
