export function ItemListContainer({ name, categoria }) {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ff6b35,#ff8e9b,#7bdcb5,#8ed1fc)] bg-[length:200%_200%] animate-[gradient-move_10s_ease_infinite] text-center py-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Bienvenido a VariaStore, {name}!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-4 mb-8 max-w-xl">
            Todo lo que necesitas, en un solo lugar
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#ff6b35] to-[#ff8e9b] text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition"
          >
            Explorar Productos
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Categoria de Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categoria.map((nombreCategoria, index) => (
              <div
                className="relative rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden group h-80"
                key={index}
                style={{
                  backgroundImage: "linear-gradient(135deg,#7bdcb5,#8ed1fc)",
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {nombreCategoria}
                  </h3>
                  <a
                    href="#"
                    className="inline-block bg-white/10 border border-white text-white rounded-full px-6 py-2 font-semibold hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
                  >
                    ¡Compra ahora!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#2f3847] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden hover:-translate-y-2 transition">
              <img
                src="./logo.png"
                alt="Product"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Headphone</h3>
                <p className="text-[#8ed1fc] font-bold mb-4">$299.99</p>
                <a
                  href="#"
                  className="inline-block border-2 border-[#8ed1fc] text-[#8ed1fc] rounded-full px-6 py-2 font-semibold hover:bg-[#8ed1fc] hover:text-white transition"
                >
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2f3847] py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Recibe novedades</h2>
          <p className="text-white/80 mb-8">
            Suscribete para las ultimas ofertas y nuevos productos.
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="email@example.com"
              required
              className="flex-1 px-6 py-3 rounded-full bg-[#232a34] text-white border border-[#404a5a] focus:border-[#ff8e9b] outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff6b35] to-[#ff8e9b] text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition"
            >
              Suscribete
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#1c232c] py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img src="./logo.png" alt="VariaStore Logo" className="h-10 mb-4" />
            <p className="text-white/70 mb-4">
              Los mejores productos de todo el mundo. Tu tienda única para todo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[#ff8e9b] font-bold mb-4">Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#ff8e9b] font-bold mb-4">Soporte</h3>
            <ul>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Envios y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Politica de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Terminos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-[#404a5a] pt-6 text-white/50">
          &copy; 2024 VariaStore. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
