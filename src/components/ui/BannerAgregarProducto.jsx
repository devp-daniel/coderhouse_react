import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function BannerAgregarProducto() {
  return (
    <section className="bg-[#2f3847] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#0f1419] rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                ¿No encuentras el producto que buscas?
              </h2>
              <p className="text-gray-300 text-lg">¡Agrégalo aquí!</p>
            </div>
            <button className="bg-[#8ed1fc] hover:bg-[#7bc3f0] text-[#0f1419] px-6 py-3 rounded-full font-semibold flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faPlus}
                className="bg-[#0f1419] text-[#8ed1fc] p-2 rounded-full"
              />
              <Link to="/agregar-producto">Agregar Producto</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
