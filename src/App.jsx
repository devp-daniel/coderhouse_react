import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./index.css";

export function App() {
  const nombre = "Horacio";
  const categorias = ["Tecnologia", "Ropa", "Comida", "Hogar"];

  return (
    <div className="bg-[#232a34] text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-[#232a34] shadow-lg">
        <NavBar />
      </header>
      <main>
        <ItemListContainer name={nombre} categoria={categorias} />
      </main>
      <footer></footer>
    </div>
  );
}
