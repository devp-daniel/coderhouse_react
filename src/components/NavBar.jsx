import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <section className="top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="VariaStore Logo" className="h-10" />
          <span className="font-bold text-xl">VariaStore</span>
        </Link>

        <nav className="flex flex-col md:flex-row items-center gap-8 mt-4 md:mt-0">
          <NavLink
            to="/"
            className="font-semibold hover:text-[#ff8e9b] transition"
          >
            Inicio
          </NavLink>

          <NavLink
            to="/category/electronics"
            className="font-semibold hover:text-[#ff8e9b] transition"
          >
            Electronics
          </NavLink>

          <NavLink
            to="/category/jewelery"
            className="font-semibold hover:text-[#ff8e9b] transition"
          >
            Jewelery
          </NavLink>

          <NavLink
            to="/category/men's clothing"
            className="font-semibold hover:text-[#ff8e9b] transition"
          >
            Men's clothing
          </NavLink>

          <NavLink
            to="/category/women's clothing"
            className="font-semibold hover:text-[#ff8e9b] transition"
          >
            Women's clothing
          </NavLink>

          <CartWidget />
        </nav>
      </div>
    </section>
  );
}
