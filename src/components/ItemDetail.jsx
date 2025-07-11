import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export function ItemDetail({ product, quantity, setQuantity }) {
  return (
    <div className="bg-[#0f1419] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative flex justify-center">
            <Link
              to="/"
              className="absolute top-4 left-4 bg-[#2f3847] px-3 py-2 rounded-full hover:bg-[#8ed1fc] hover:text-[#0f1419] transition text-sm font-semibold flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Volver
            </Link>

            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain bg-white rounded-xl p-8"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#8ed1fc]">
                ${product.price.toFixed(2)}
              </span>
              <span className="bg-[#2f3847] px-3 py-1 rounded-full text-sm capitalize">
                {product.category}
              </span>
            </div>

            <div className="border-t border-[#2f3847] pt-6">
              <h3 className="text-xl font-semibold mb-3">Descripción</h3>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-[#2f3847] rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-3">Cantidad</h4>
              <ItemCount quantity={quantity} setQuantity={setQuantity} />

              <div className="mt-3 pt-3 border-t border-[#0f1419]">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-bold text-[#8ed1fc]">
                    ${(product.price * quantity).toFixed(2)}
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
