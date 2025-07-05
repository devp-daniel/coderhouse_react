export function ItemListContainer({ name, categoria }) {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-orange via-accent-pink to-accent-blue animate-gradient-move text-center py-24">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Bienvenido a VariaStore, {name}!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-4 mb-8 max-w-xl">
            Todo lo que necesitas, en un solo lugar
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-accent-orange to-accent-pink text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition"
          >
            Explorar Productos
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Categoria de Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categoria.map((nombreCategoria, index) => (
              <div
                className="relative rounded-xl shadow-varia overflow-hidden group"
                key={index}
                style={{
                  backgroundImage: "linear-gradient(135deg, #7bdcb5, #8ed1fc)",
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-80">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {nombreCategoria}
                  </h3>
                  <a
                    href="#"
                    className="inline-block bg-white/10 border border-white text-white rounded-full px-6 py-2 font-semibold hover:bg-gradient-to-r hover:from-accent-orange hover:to-accent-pink transition"
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
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-card-bg rounded-xl shadow-varia overflow-hidden hover:-translate-y-2 transition">
              <img
                src="./logo.png"
                alt="Product"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Headphone</h3>
                <p className="text-accent-blue font-bold mb-4">$299.99</p>
                <a
                  href="#"
                  className="inline-block border-2 border-accent-blue text-accent-blue rounded-full px-6 py-2 font-semibold hover:bg-accent-blue hover:text-white transition"
                >
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card-bg py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Recibe novedades</h2>
          <p className="text-white/80 mb-8">
            Suscribete para las ultimas ofertas y nuevos productos.
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="email@example.com"
              required
              className="flex-1 px-6 py-3 rounded-full bg-dark-navy text-white border border-gray-700 focus:border-accent-pink outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-accent-orange to-accent-pink text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition"
            >
              Suscribete
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-[#1c232c] py-16">
        <div className="container mx-auto grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img src="./logo.png" alt="VariaStore Logo" className="h-10 mb-4" />
            <p className="text-white/70 mb-4">
              Los mejores productos de todo el mundo. Tu tienda única para todo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-gradient-to-r hover:from-accent-orange hover:to-accent-pink transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-accent-pink font-bold mb-4">Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Tienda
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent-pink font-bold mb-4">Soporte</h3>
            <ul>
              <li>
                <a href="#" className="hover:pl-2 transition">
                  Envios y Devoluciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-6 text-white/50">
          &copy; 2024 VariaStore. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
