import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemList } from "./components/ItemList";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Footer } from "./components/Footer";
import { Error } from "./components/Error";

export function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#232a34] text-white min-h-screen">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products" element={<ItemList />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
