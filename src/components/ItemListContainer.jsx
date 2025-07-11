import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "./Banner";
import { ItemList } from "./ItemList";

const categoryNames = {
  electronics: "Electrónica",
  jewelery: "Joyería",
  "men's clothing": "Ropa de Hombre",
  "women's clothing": "Ropa de Mujer",
};

export function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://fakestoreapi.com/products";

        if (id) {
          url = `https://fakestoreapi.com/products/category/${id}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [id]);

  const pageTitle = id
    ? `Productos de: ${categoryNames[id] || id}`
    : "Todos los Productos";

  return (
    <>
      <Banner />

      <section className="py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">{pageTitle}</h2>

          <ItemList products={products} />
        </div>
      </section>
    </>
  );
}
