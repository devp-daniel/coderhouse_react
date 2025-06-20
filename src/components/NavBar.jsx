import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <nav className="container">
      <div>
        <img src="/logo.png" alt="Logo de la pagina" className="logo" />
      </div>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Tienda</a>
        </li>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Sobre Nosotros</a>
        </li>
        <li>
          <a href="">Contactanos</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
