import { Link } from "react-router-dom";

export function Error() {
  return (
    <section className="min-h-full bg-[#0f1419] text-white py-14">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-[140px] md:text-[200px] font-bold text-[#8ed1fc] leading-none opacity-20">
            404
          </h1>
        </div>

        <div className="relative -mt-20 md:-mt-32 z-10">
          <div className="text-8xl md:text-9xl mb-6">🔍</div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Página no encontrada
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lo sentimos, la página que estás buscando no existe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <button className="px-8 py-3 bg-[#8ed1fc] text-[#0f1419] rounded-lg font-semibold hover:bg-[#7bc3f0] transition transform hover:scale-105 shadow-lg cursor-pointer">
                Ir al inicio
              </button>
            </Link>
            <Link to="/products">
              <button className="px-8 py-3 bg-transparent border-2 border-[#8ed1fc] text-[#8ed1fc] rounded-lg font-semibold hover:bg-[#8ed1fc] hover:text-[#0f1419] transition transform hover:scale-105 cursor-pointer">
                Ver productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
