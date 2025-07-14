import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const navigation = [
  { name: "Inicio", to: "/" },
  { name: "Electronics", to: "/category/electronics" },
  { name: "Jewelery", to: "/category/jewelery" },
  { name: "Men's clothing", to: "/category/men's clothing" },
  { name: "Women's clothing", to: "/category/women's clothing" },
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
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff8e9b]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
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
                fill="none"
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

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="VariaStore Logo"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl ">VariaStore</span>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartWidget />
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={
                "block rounded-md px-3 py-2 text-base font-medium transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="px-3 py-2">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
