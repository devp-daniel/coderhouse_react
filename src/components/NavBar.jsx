import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <a href="#" className="flex items-center">
        <img src="./logo.png" alt="VariaStore Logo" className="h-12" />
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-8 font-semibold">
          <li className="hover:text-accent-pink transition">
            <a href="">Inicio</a>
          </li>
          <li className="hover:text-accent-pink transition">
            <a href="">Tienda</a>
          </li>
          <li className="hover:text-accent-pink transition">
            <a href="">Productos</a>
          </li>
          <li className="hover:text-accent-pink transition">
            <a href="">Sobre Nosotros</a>
          </li>
          <li className="hover:text-accent-pink transition">
            <a href="">Contactanos</a>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
}
