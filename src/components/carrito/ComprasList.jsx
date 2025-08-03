import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faShoppingBag,
  faCalendarAlt,
  faReceipt,
  faHashtag,
  faDollarSign,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export function ComprasList() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const ordersQuery = query(ordersCollection, orderBy("date", "desc"));

    getDocs(ordersQuery)
      .then((querySnapshot) => {
        const comprasData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompras(comprasData);
      })
      .catch((err) => {
        console.error("Error al obtener las compras:", err);
        setError("Error al cargar las compras");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      <div className="bg-[#0f1419] min-h-screen py-10">
        <div className="flex justify-center items-center">
          <p className="text-xl">Cargando tus compras...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0f1419] min-h-screen py-10">
        <div className="flex justify-center items-center">
          <p className="text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#0f1419] min-h-screen py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b35] to-[#ff8e9b] rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faShoppingBag} className=" text-xl" />
            </div>
            <h1 className="text-4xl font-bold">Mis Compras</h1>
          </div>
          <p>Historial completo de tus pedidos realizados</p>
        </div>

        {!loading &&
          !error &&
          (compras.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="text-4xl text-[#8ed1fc]"
                />
              </div>
              <h2 className="text-2xl text-gray-800 font-bold mb-3">
                No tienes compras registradas
              </h2>
              <p className="mb-8 text-gray-600">
                Cuando realices tu primera compra, aparecerá aquí
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faReceipt}
                    className="text-[#ff6b35]"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Historial de Compras ({compras.length})
                  </h2>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faHashtag}
                            className="text-gray-400"
                          />
                          ID de Compra
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="text-gray-400"
                          />
                          Fecha y Hora
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            className="text-gray-400"
                          />
                          Total
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {compras.map((compra) => (
                      <tr
                        key={compra.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={faReceipt}
                                className="text-[#ff6b35] text-sm"
                              />
                            </div>
                            <div>
                              <p className="font-mono text-sm font-medium text-gray-800">
                                #{compra.id.slice(0, 8)}...
                              </p>
                              <p className="text-xs text-gray-500">
                                {compra.items?.length || 0} productos
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-gray-800">
                            {formatDate(compra.date)}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-lg font-bold text-green-600">
                            ${compra.total || 0}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            to={`/compras/${compra.id}`}
                            className="inline-flex items-center gap-2 text-black bg-[#8ed1fc] hover:bg-[#7bc3f0] px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            <FontAwesomeIcon icon={faEye} className="text-sm" />
                            Ver detalles
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="md:hidden divide-y divide-gray-100">
                {compras.map((compra) => (
                  <div key={compra.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faReceipt}
                            className="text-blue-600"
                          />
                        </div>
                        <div>
                          <p className="font-mono text-sm font-medium text-gray-800">
                            #{compra.id.slice(0, 8)}...
                          </p>
                          <p className="text-xs text-gray-500">
                            {compra.items?.length || 0} productos
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">
                          ${compra.total || 0}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="text-gray-400"
                        />
                        {formatDate(compra.date)}
                      </p>
                    </div>

                    <Link
                      to={`/compras/${compra.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <FontAwesomeIcon icon={faEye} />
                      Ver detalles completos
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

        <div className="text-center mt-12">
          <Link
            to="/"
            className="w-full bg-[#8ed1fc] text-[#0f1419] rounded-full px-8 py-3 font-semibold hover:bg-[#7bc3f0] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
