import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center ">
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
