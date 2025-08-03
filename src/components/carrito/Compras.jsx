import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faReceipt,
  faUser,
  faMapMarkerAlt,
  faBox,
  faCalendarAlt,
  faIdCard,
  faEnvelope,
  faPhone,
  faMailBulk,
  faFlag,
  faCity,
  faBoxes,
  faTag,
  faCalculator,
  faHashtag,
  faCheckCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export function Compras() {
  const { id } = useParams();
  const [compra, setCompra] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const db = getFirestore();
    const compraDoc = doc(db, "orders", id);

    getDoc(compraDoc)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setCompra({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Compra no encontrada");
        }
      })
      .catch((err) => {
        console.error("Error al obtener la compra:", err);
        setError("Error al cargar los detalles de la compra");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Fecha no disponible";

    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleString();
    } catch {
      return "Fecha no válida";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f1419] py-8 px-4">
        <div className="max-w-5xl mx-auto text-xl text-center">
          Cargando detalles de la compra...
        </div>
      </div>
    );
  }

  if (error || !compra) {
    return (
      <div className="min-h-screen bg-[#0f1419] py-8 px-4">
        <div className="max-w-5xl mx-auto text-xl text-center">
          {error || "Compra no encontrada"}
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f1419] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            to="/compras"
            className="inline-flex items-center bg-[#2f3847] px-3 py-2 rounded-full hover:bg-[#8ed1fc] hover:text-[#0f1419] transition text-sm font-semibold gap-2 mb-6"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver a mis compras
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b35] to-[#ff8e9b] rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faReceipt} className="text-xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold ">Detalles de Compra</h1>
              {compra && <p className="font-mono">#{compra.id}</p>}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Informacion Personal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                  Información Personal
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faIdCard}
                        className="text-gray-400 mr-2"
                      />
                      Nombre completo
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.name || "No especificado"}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-400 mr-2"
                      />
                      Correo electrónico
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.email || "No especificado"}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-gray-400 mr-2"
                      />
                      Teléfono
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.phone || "No especificado"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direccion */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-green-600"
                  />
                  Dirección de Envío
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-gray-400 mr-2"
                      />
                      Dirección completa
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.address || "No especificada"}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faCity}
                        className="text-gray-400 mr-2"
                      />
                      Ciudad
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.city || "No especificada"}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faMailBulk}
                        className="text-gray-400 mr-2"
                      />
                      Código postal
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.postalCode || "No especificado"}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      <FontAwesomeIcon
                        icon={faFlag}
                        className="text-gray-400 mr-2"
                      />
                      País
                    </label>
                    <p className="text-lg font-semibold text-gray-800">
                      {compra.buyer?.country || "No especificado"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Productos */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50/50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon icon={faBox} className="text-purple-600" />
                  Productos ({compra.items?.length || 0})
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {compra.items && compra.items.length > 0 ? (
                  compra.items.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="p-6 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                              {item.title || "Producto sin nombre"}
                            </h3>
                            <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium ml-4 whitespace-nowrap">
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
                                {item.quantity || 0}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <FontAwesomeIcon
                                icon={faTag}
                                className="text-gray-400"
                              />
                              <div className="text-gray-600">Precio:</div>
                              <div className="font-medium text-gray-800">
                                ${item.price || 0}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                              <FontAwesomeIcon
                                icon={faCalculator}
                                className="text-gray-400"
                              />
                              <div className="text-gray-600">Subtotal:</div>
                              <div className="font-bold text-purple-600">
                                ${item.price * item.quantity || 0}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <FontAwesomeIcon
                      icon={faBox}
                      className="text-3xl mb-3 text-gray-300"
                    />
                    <p>No hay productos en esta compra</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Barra lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 top-8">
              <div className="bg-orange-50 px-6 py-4 border-b border-gray-200 rounded-2xl">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faReceipt}
                    className="text-[#ff6b35]"
                  />
                  Resumen
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-blue-100">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-[#ff6b35] text-xl"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Fecha de compra
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {formatDate(compra.date)}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-xl border border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faHashtag}
                      className="text-[#ff6b35]"
                    />
                    ID de la orden
                  </p>
                  <p className="font-mono text-sm text-gray-800 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    {compra.id}
                  </p>
                </div>

                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBox} />
                    Productos
                  </div>
                  <div className="font-medium">{compra.items?.length || 0}</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold text-gray-800">
                      Total Pagado
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      ${compra.total || 0}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-600 text-2xl"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        Compra Completada
                      </p>
                      <p className="text-xs text-gray-600">
                        Pedido procesado exitosamente
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <Link
                    to="/compras"
                    className="w-full text-black bg-[#8ed1fc] hover:bg-[#7bc3f0] px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Volver a mis compras
                  </Link>

                  <Link
                    to="/"
                    className="w-full text-center text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <FontAwesomeIcon icon={faHome} />
                    Ir al inicio
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
