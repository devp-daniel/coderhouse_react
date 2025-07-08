import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <section className="sticky top-0 z-50 bg-[#232a34] shadow-lg">
      <div className="container mx-auto flex items-center justify-around py-4 px-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="VariaStore Logo" className="h-12" />
        </Link>
        <nav className="hidden md:block ">
          <ul className="flex gap-8 font-semibold">
            <li className="hover:text-[#ff8e9b] transition">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:text-[#ff8e9b] transition">
              <Link to="/#categorias">Categorías</Link>
            </li>
            <li className="hover:text-[#ff8e9b] transition">
              <Link to="/productos">Todos los Productos</Link>
            </li>
            <CartWidget />
          </ul>
        </nav>
      </div>
    </section>
  );
}
