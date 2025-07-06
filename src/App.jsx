import "./index.css";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ItemListContainer } from "./components/ItemListContainer";
import { Destacados } from "./components/Destacados";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-[#232a34] text-white min-h-screen">
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <ItemListContainer />
        <Destacados />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
