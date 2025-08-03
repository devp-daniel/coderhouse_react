import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../providers/CartContext";

export function Item({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="bg-[#2f3847] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden hover:-translate-y-2 transition cursor-pointer group flex flex-col h-full">
      <Link
        to={`/item/${product.id}`}
        className="group flex-1 flex flex-col cursor-pointer"
      >
        <div className="relative">
          <img
            src={product.imagen}
            alt={product.titulo}
            className="w-full h-48 object-contain bg-white p-4"
          />
          <div className="absolute top-2 right-2 bg-[#8ed1fc] text-[#0f1419] px-2 py-1 rounded-full text-xs font-semibold">
            {product.categoria}
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#8ed1fc] transition">
            {product.titulo}
          </h3>

          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-[#8ed1fc]">
              ${product.precio.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-300 text-sm line-clamp-2 mb-3 flex-1">
            {product.descripcion}
          </p>
        </div>
      </Link>

      <button
        onClick={() => addToCart(product, 1)}
        className="w-full rounded-lg py-2 font-semibold bg-[#8ed1fc] text-[#0f1419] hover:bg-[#7bc3f0] hover:text-white transition cursor-pointer"
      >
        Agregar al carrito
      </button>
    </section>
  );
}
