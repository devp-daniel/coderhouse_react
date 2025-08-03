import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHome,
  faListAlt,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Confirmacion({ orderId }) {
  return (
    <section className="min-h-screen bg-[#0f1419] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-100">
          <div className="w-24 h-24 mx-auto mb-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Compra Exitosa!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gracias por confiar en nosotros. Tu pedido ha sido procesado
            correctamente.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <p className="text-gray-700 font-medium mb-3 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faReceipt} className="text-blue-600" />
              Número de orden:
            </p>
            <div className="bg-white rounded-xl p-4 border-2 border-dashed border-blue-200">
              <p className="text-blue-600 font-mono text-xl font-bold tracking-wide">
                #{orderId}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Guarda este número para el seguimiento de tu pedido
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#8ed1fc] text-[#0f1419] hover:bg-[#7bc3f0] hover:text-white cursor-pointer px-8 py-4 rounded-xl font-semibold"
            >
              <FontAwesomeIcon icon={faHome} />
              Volver al inicio
            </Link>
            <Link
              to="/compras"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-800 px-8 py-4 rounded-xl font-semibold "
            >
              <FontAwesomeIcon icon={faListAlt} />
              Ver mis pedidos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
