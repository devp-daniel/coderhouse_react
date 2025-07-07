import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getProducts, getCategories } from "../async";

export function Productos() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Cargar productos y categorías al montar el componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setAllProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);

        // Aplicar filtro de categoría desde URL si existe
        const categoryFromUrl = searchParams.get("category");
        if (categoryFromUrl) {
          setSelectedCategory(categoryFromUrl);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [searchParams]);

  // Filtrar productos cuando cambien los criterios
  useEffect(() => {
    let filtered = [...allProducts];

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [allProducts, selectedCategory, searchTerm]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Actualizar URL sin recargar la página
    const params = new URLSearchParams();
    if (category !== "all") {
      params.set("category", category);
    }
    navigate(`/productos?${params.toString()}`, { replace: true });
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    navigate("/productos", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0f1419] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Todos los Productos
        </h1>

        <div className="bg-[#2f3847] rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Buscador */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Buscar productos
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o descripción..."
                className="w-full px-4 py-2 bg-[#0f1419] border border-[#8ed1fc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ed1fc] text-white"
              />
            </div>

            {/* Filtro por categoría */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-2 bg-[#0f1419] border border-[#8ed1fc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ed1fc] text-white"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón para limpiar filtros */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-300">
              Mostrando {filteredProducts.length} de {allProducts.length}{" "}
              productos
            </span>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm bg-[#8ed1fc] text-[#0f1419] rounded-lg hover:bg-[#7bc3f0] transition font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-300 mb-4">
              Intenta cambiar los filtros o términos de búsqueda
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-[#8ed1fc] text-[#0f1419] rounded-lg font-semibold hover:bg-[#7bc3f0] transition"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
