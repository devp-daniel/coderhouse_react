import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./index.css";

export function App() {
  const nombre = "Horacio";
  const categorias = ["Tecnologia", "Ropa", "Comida", "Hogar"];

  return (
    <>
      <header className="bg-dark-navy sticky top-0 z-50 shadow-lg">
        <NavBar />
      </header>
      <main>
        <ItemListContainer name={nombre} categoria={categorias} />
      </main>
      <footer></footer>
    </>
  );
}
