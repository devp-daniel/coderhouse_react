import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faBoxes,
  faDollarSign,
  faImage,
  faList,
  faShoppingBag,
  faStore,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export function AgregarProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    imagen: "",
    categoria: "Tecnologia",
    descripcion: "",
    precio: "",
    disponibilidad: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "precio" || name === "disponibilidad"
          ? Number(value) || value
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (
      !formData.titulo ||
      !formData.imagen ||
      !formData.descripcion ||
      !formData.precio ||
      !formData.disponibilidad
    ) {
      setError("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    if (isNaN(formData.precio) || formData.precio <= 0) {
      setError("El precio debe ser un número válido mayor a 0");
      setLoading(false);
      return;
    }

    if (isNaN(formData.disponibilidad) || formData.disponibilidad < 0) {
      setError("La cantidad debe ser un número válido mayor o igual a 0");
      setLoading(false);
      return;
    }

    const db = getFirestore(app);
    const productosRef = collection(db, "productos");

    addDoc(productosRef, formData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-[#0f1419] min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          to="/"
          className="mb-8 bg-[#2f3847] px-4 py-2 rounded-full hover:bg-[#8ed1fc] hover:text-[#0f1419] transition text-sm font-semibold flex items-center gap-2 w-fit"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver al inicio
        </Link>

        <div className="text-center mb-8">
          <h1 className=" text-3xl font-bold">
            <FontAwesomeIcon icon={faStore} className="text-[#8ed1fc] mr-2" />
            Agregar Nuevo Producto
          </h1>
          <p className="mt-4">¡Gracias por ayudarnos a crecer!</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xl font-bold text-gray-600">
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                Nombre del Producto *
              </label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
                className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
                placeholder="Ej: Smartphone"
              />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <label className="text-xl font-bold text-gray-600">
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Imagen URL del Producto *
              </label>
              <input
                type="url"
                name="imagen"
                value={formData.imagen}
                onChange={handleInputChange}
                className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <label className="text-xl font-bold text-gray-600">
                <FontAwesomeIcon icon={faBoxes} className="mr-2" />
                Categoría *
              </label>
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
                className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
              >
                <option value="Tecnologia">Tecnología</option>
                <option value="Joyeria">Joyería</option>
                <option value="Ropa de Hombre">Ropa de Hombre</option>
                <option value="Ropa de Mujer">Ropa de Mujer</option>
              </select>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <label className=" text-xl font-bold text-gray-600">
                <FontAwesomeIcon icon={faList} className="mr-2" />
                Descripción *
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                rows="4"
                className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
                placeholder="Describe el producto..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
              <div>
                <label className="text-xl font-bold text-gray-600">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                  Precio *
                </label>
                <input
                  type="number"
                  name="precio"
                  value={formData.precio}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-600">
                  <FontAwesomeIcon icon={faTag} className="mr-2" />
                  Cantidad Disponible *
                </label>
                <input
                  type="number"
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none mt-4"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="border-t border-gray-100">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8ed1fc] text-[#0f1419] rounded-full px-8 py-3 font-semibold hover:bg-[#7bc3f0] transition disabled:opacity-50 disabled:cursor-not-allowed mt-8 cursor-pointer"
              >
                {loading ? "Agregando producto..." : "Agregar Producto"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
