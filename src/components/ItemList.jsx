import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getProducts, getCategories } from "../async";
import { Item } from "./Item";

export function ItemList() {
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (category !== "all") {
      params.set("category", category);
    }
    navigate(`/products?${params.toString()}`, { replace: true });
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    navigate("/products", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0f1419] text-white py-14">
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

        {/* Componente hijo que muestra los productos */}
        <Item products={filteredProducts} onClearFilters={clearFilters} />
      </div>
    </div>
  );
}
