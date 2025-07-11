import { Link } from "react-router-dom";

export function Item({ product }) {
  return (
    <Link
      to={`/item/${product.id}`}
      className="bg-[#2f3847] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden hover:-translate-y-2 transition cursor-pointer group flex flex-col h-full"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain bg-white p-4"
        />
        <div className="absolute top-2 right-2 bg-[#8ed1fc] text-[#0f1419] px-2 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#8ed1fc] transition">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-[#8ed1fc]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        <button
          className="w-full bg-[#8ed1fc] text-[#0f1419] rounded-lg py-2 font-semibold hover:bg-[#7bc3f0] transition mt-auto
          cursor-pointer"
        >
          Agregar al carrito
        </button>
      </div>
    </Link>
  );
}
