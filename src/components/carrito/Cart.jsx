import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faListCheck,
  faArrowLeft,
  faBoxes,
  faTag,
  faCalculator,
  faTrashAlt,
  faReceipt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../providers/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const {
    cart: cartItems,
    removeFromCart: removeItem,
    clearCart,
    getTotalPrice: getTotal,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f1419] flex flex-col items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md w-full border border-gray-100">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#8ed1fc] text-4xl"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-500 mb-8">
            Parece que no has agregado nada a tu carrito todavía
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8ed1fc] hover:bg-[#7bc3f0] text-[#0f1419] px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f1419] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
            </div>
            <h1 className="text-4xl font-bold">Carrito de Compras</h1>
          </div>
          <p>
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "producto" : "productos"} en tu carrito
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faListCheck}
                    className=" text-gray-800"
                  />
                  Productos
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-6 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                            {item.titulo}
                          </h3>
                          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium ml-4 whitespace-nowrap">
                            #{index + 1}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faBoxes}
                              className="text-gray-400"
                            />

                            <div className="text-gray-600">Cantidad:</div>
                            <div className="font-medium text-gray-800">
                              {item.quantity}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faTag}
                              className="text-gray-400"
                            />
                            <div className="text-gray-600">Precio:</div>
                            <div className="font-medium text-gray-800">
                              ${item.precio}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                            <FontAwesomeIcon
                              icon={faCalculator}
                              className="text-gray-400"
                            />

                            <div className="text-gray-600">Subtotal:</div>
                            <div className="font-bold text-blue-600">
                              ${(item.precio * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col justify-end">
                        <button
                          className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium text-sm group cursor-pointer"
                          onClick={() => removeItem(item.id)}
                        >
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="group-hover:scale-110 transition-transform"
                          />
                          <div className="hidden sm:inline">Eliminar</div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100  top-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faReceipt}
                    className="text-green-600"
                  />
                  Resumen
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <div>Subtotal ({cartItems.length} productos)</div>
                    <div>${getTotal()}</div>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <div>Envío</div>
                    <div className="text-green-600 font-medium">Gratis</div>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-gray-800">
                        Total
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        ${getTotal()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    className="w-full bg-green-600 hover:bg-emerald-700 px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    Finalizar Compra
                  </Link>

                  <button
                    className="w-full border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={clearCart}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    Vaciar Carrito
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="/"
                    className="w-full text-center text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Continuar comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
