import "./index.css";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/ui/NavBar";
import { ItemListContainer } from "./components/productos/ItemListContainer";
import { ItemDetailContainer } from "./components/productos/ItemDetailContainer";
import { AgregarProducto } from "./components/productos/AgregarProducto";
import { Cart } from "./components/carrito/Cart";
import { Checkout } from "./components/carrito/Checkout";
import { ComprasList } from "./components/carrito/ComprasList";
import { Compras } from "./components/carrito/Compras";
import { Footer } from "./components/ui/Footer";
import { Error } from "./components/ui/Error";

export function App() {
  return (
    <div className="bg-[#232a34] text-white min-h-screen">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/compras" element={<ComprasList />} />
          <Route path="/compras/:id" element={<Compras />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
