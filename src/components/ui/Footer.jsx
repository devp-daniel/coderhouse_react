import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-[#1c232c] py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 mb-8 gap-12">
          {/* Columna izquierda */}

          <div className="col-span-2">
            <img src="/logo.png" alt="VariaStore Logo" className="h-10 mb-4" />
            <p className="text-white/70 mb-4">
              Los mejores productos de todo el mundo. Tu tienda única para todo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/devp-daniel/coderhouse_react"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] hover:bg-[#ff8e9b]"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] hover:bg-[#ff8e9b]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] hover:bg-[#ff8e9b]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] hover:bg-[#ff8e9b]"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Columna central */}

          <div>
            <h3 className="text-[#ff8e9b] font-bold mb-4">Menú</h3>
            <ul className="space-y-2">
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link to="/" className="text-white/70 hover:text-[#ff8e9b]">
                  Inicio
                </Link>
              </li>
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link to="/cart" className="text-white/70 hover:text-[#ff8e9b]">
                  Carrito
                </Link>
              </li>
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link
                  to="/compras"
                  className="text-white/70 hover:text-[#ff8e9b]"
                >
                  Compras Realizadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna derecha */}

          <div>
            <h3 className="text-[#ff8e9b] font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link
                  to="/categoria/tecnologia"
                  className="text-white/70 hover:text-[#ff8e9b]"
                >
                  Tecnologia
                </Link>
              </li>
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link
                  to="/categoria/joyeria"
                  className="text-white/70 hover:text-[#ff8e9b]"
                >
                  Joyeria
                </Link>
              </li>
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link
                  to="/categoria/ropa-hombre"
                  className="text-white/70 hover:text-[#ff8e9b]"
                >
                  Ropa de Hombre
                </Link>
              </li>
              <li className="transition-all duration-300 hover:pl-2 ">
                <Link
                  to="/categoria/ropa-mujer"
                  className="text-white/70 hover:text-[#ff8e9b]"
                >
                  Ropa de Mujer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#404a5a] pt-6 text-center text-white/50">
          © 2025 VariaStore. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
