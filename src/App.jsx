import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ItemListContainer } from "./components/ItemListContainer";
import { Destacados } from "./components/Destacados";
import { Footer } from "./components/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Productos } from "./components/Productos";

// Página principal
function HomePage() {
  return (
    <>
      <Banner />
      <ItemListContainer />
      <Destacados />
    </>
  );
}

// Todos los productos
function TodosProductos() {
  return <Productos />;
}

export function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#232a34] text-white min-h-screen">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<TodosProductos />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
