import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";

export function App() {
  const nombre = "Horacio";
  const categorias = ["Tecnologia", "Ropa", "Comida", "Hogar"];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer name={nombre} categoria={categorias} />
      </main>
      <footer></footer>
    </>
  );
}
