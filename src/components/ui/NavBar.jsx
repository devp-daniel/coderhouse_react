import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const categories = [
  { name: "Tecnologia", to: "/categoria/tecnologia" },
  { name: "Joyeria", to: "/categoria/joyeria" },
  { name: "Ropa de Hombre", to: "/categoria/ropa-hombre" },
  { name: "Ropa de Mujer", to: "/categoria/ropa-mujer" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Boton menu mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff8e9b]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo y navegacion */}
          <div className="flex flex-1 justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="VariaStore Logo"
                  className="h-8 w-auto"
                />
                <p className="font-bold text-xl">VariaStore</p>
              </Link>
            </div>

            {/* Navegacion Desktop */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                >
                  Inicio
                </NavLink>

                {categories.map((category) => (
                  <NavLink
                    key={category.name}
                    to={category.to}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {category.name}
                  </NavLink>
                ))}

                <NavLink
                  to="/compras"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                >
                  Compras Realizadas
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartWidget />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2 bg-white border-t border-gray-200">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700"
          >
            Inicio
          </NavLink>

          {categories.map((category) => (
            <NavLink
              key={category.name}
              to={category.to}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700"
            >
              {category.name}
            </NavLink>
          ))}

          <NavLink
            to="/checkout"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700"
          >
            Compras Realizadas
          </NavLink>

          <div className="px-3 py-2 border-t border-gray-200 mt-2">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
