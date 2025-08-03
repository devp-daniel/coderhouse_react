import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    getDocs(productosCollection)
      .then((respuesta) => {
        const productData = respuesta.docs.find((doc) => doc.id === id);
        if (productData) {
          const data = productData.data();
          const newProduct = {
            id: productData.id,
            titulo: data.titulo,
            precio: data.precio,
            descripcion: data.descripcion,
            imagen: data.imagen,
            categoria: data.categoria,
            disponibilidad: Number(data.disponibilidad),
          };
          setProduct(newProduct);
          setQuantity(newProduct.stock > 0 ? 1 : 0);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl">Cargando...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl">Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <ItemDetail
      product={product}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
}
