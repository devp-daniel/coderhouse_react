import { useContext, useState } from "react";
import { CartContext } from "../../providers/CartContext";
import { Confirmacion } from "./Confirmacion";
import {
  collection,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faCreditCard,
  faEnvelope,
  faFlag,
  faIdCard,
  faLock,
  faMailBulk,
  faMapMarker,
  faPhone,
  faReceipt,
  faShippingFast,
  faShoppingBag,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const order = {
      buyer: form,
      items: cart,
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.error("Error al generar la orden:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (orderId) {
    return <Confirmacion orderId={orderId} />;
  }

  return (
    <section className="min-h-screen bg-[#0f1419] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faCreditCard} className="text-xl" />
            </div>
            <h1 className="text-4xl font-bold ">Finalizar Compra</h1>
          </div>
          <p>Completa tus datos para procesar el pedido</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Informacion Personal */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-blue-600 text-xl"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Información Personal
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faIdCard}
                          className="text-gray-400 mr-2"
                        />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="Ingresa tu nombre completo"
                        value={form.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-gray-400 mr-2"
                        />
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="ejemplo@correo.com"
                        value={form.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-gray-400 mr-2"
                        />
                        Número de teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="+57 300 123 4567"
                        value={form.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Direccion de envio */}
                <div className="border-t border-gray-100 pt-8">
                  <div className="flex items-center gap-2 mb-6">
                    <FontAwesomeIcon
                      icon={faShippingFast}
                      className="text-green-600 text-xl"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Dirección de Envío
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faMapMarker}
                          className="text-gray-400 mr-2"
                        />
                        Dirección completa *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="Calle, número, apartamento, etc."
                        value={form.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <FontAwesomeIcon
                            icon={faCity}
                            className="text-gray-400 mr-2"
                          />
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                          placeholder="Tu ciudad"
                          value={form.city}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <FontAwesomeIcon
                            icon={faMailBulk}
                            className="text-gray-400 mr-2"
                          />
                          Código postal *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          required
                          className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                          placeholder="110111"
                          value={form.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <FontAwesomeIcon
                            icon={faFlag}
                            className="text-gray-400 mr-2"
                          />
                          País *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                          placeholder="Pais"
                          value={form.country}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer bg-green-600 hover:bg-emerald-700 disabled:from-gray-400 disabled:to-gray-500 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>Procesando pedido...</>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faLock} className="text-xl" />
                        Confirmar Compra
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Barra lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 top-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon icon={faReceipt} className="text-blue-600" />
                  Resumen del Pedido
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center text-gray-600">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Productos ({cart?.length || 0})
                  </div>
                  <div>${getTotalPrice?.() || 0}</div>
                </div>

                <div className="flex justify-between items-center text-gray-600">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTruck} />
                    Envío
                  </div>
                  <div className="text-green-600 font-medium">Gratis</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-800">Total</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${getTotalPrice?.() || 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
