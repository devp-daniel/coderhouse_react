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
    <footer className="bg-[#1c232c] py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-8">
        <div className="col-span-2">
          <img src="./logo.png" alt="VariaStore Logo" className="h-10 mb-4" />
          <p className="text-white/70 mb-4">
            Los mejores productos de todo el mundo. Tu tienda única para todo.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/devp-daniel/coderhouse_react"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[#ff8e9b] font-bold mb-4 ">Links</h3>
          <ul>
            <li className="transition-all duration-300 hover:pl-2 hover:text-[#ff8e9b]">
              <Link to="/">Inicio</Link>
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-[#ff8e9b]">
              <Link to="/products">Todos los Productos</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full text-center border-t border-[#404a5a] pt-6 text-white/50">
          &copy; 2025 VariaStore. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
