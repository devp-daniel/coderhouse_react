import { useNavigate } from "react-router-dom";

export function Item({ products, onClearFilters }) {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold mb-2">
          No se encontraron productos
        </h3>
        <p className="text-gray-300 mb-4">
          Intenta cambiar los filtros o términos de búsqueda
        </p>
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-[#8ed1fc] text-[#0f1419] rounded-lg font-semibold hover:bg-[#7bc3f0] transition"
        >
          Ver todos los productos
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
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
                ${product.price}
              </span>
            </div>

            <p className="text-gray-300 text-sm line-clamp-2 mb-3 flex-1">
              {product.description}
            </p>

            <button className="w-full bg-[#8ed1fc] text-[#0f1419] rounded-lg py-2 font-semibold hover:bg-[#7bc3f0] transition mt-auto">
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
