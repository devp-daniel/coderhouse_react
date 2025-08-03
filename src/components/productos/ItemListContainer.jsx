import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app } from "../../firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Banner } from "../ui/Banner";
import { ItemList } from "./ItemList";
import { BannerAgregarProducto } from "../ui/BannerAgregarProducto";

const categoryNames = {
  tecnologia: "Tecnologia",
  joyeria: "Joyeria",
  "ropa-hombre": "Ropa de Hombre",
  "ropa-mujer": "Ropa de Mujer",
};

export function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      handleTraerProductosPorCategoria(id);
    } else {
      handleTraerProductos();
    }
  }, [id]);

  const handleTraerProductos = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");
    getDocs(productsCollection)
      .then((response) => {
        const productosFinales = response.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(productosFinales);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleTraerProductosPorCategoria = (categoriaId) => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");
    const categoryName = categoryNames[categoriaId];
    const filtro = query(
      productsCollection,
      where("categoria", "==", categoryName)
    );
    getDocs(filtro)
      .then((response) => {
        const productosFinales = response.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(productosFinales);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const pageTitle = id
    ? `Productos de: ${categoryNames[id] || id}`
    : "Todos los Productos";

  return (
    <>
      <Banner />

      <section className="py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">{pageTitle}</h2>

          {loading ? (
            <div className="flex justify-center items-center">
              <p className="text-xl">Cargando productos...</p>
            </div>
          ) : products.length > 0 ? (
            <ItemList products={products} />
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-xl">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <BannerAgregarProducto />
    </>
  );
}
