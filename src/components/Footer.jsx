import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-[#1c232c] py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-8">
        <div className="col-span-2">
          <img src="./logo.png" alt="VariaStore Logo" className="h-10 mb-4" />
          <p className="text-white/70 mb-4">
            Los mejores productos de todo el mundo. Tu tienda única para todo.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#404a5a] text-white hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ff8e9b] transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[#ff8e9b] font-bold mb-4 ">Links</h3>
          <ul>
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:pl-2 hover:text-[#ff8e9b]"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:pl-2 hover:text-[#ff8e9b]"
              >
                Categorias
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:pl-2 hover:text-[#ff8e9b]"
              >
                Todos los Productos
              </a>
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
