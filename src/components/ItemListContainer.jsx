export function ItemListContainer({ name, categoria }) {
  return (
    <>
      <section className="saludo">
        <div className="container">
          <h1>Bienvenido a VariaStore, {name}!</h1>
          <p>Todo lo que necesitas, en un solo lugar</p>
        </div>
      </section>

      <section className="categoria">
        <div className="container">
          <h2>Categoria de Productos</h2>
          <div className="categoria-grid">
            {categoria.map((nombreCategoria, index) => (
              <div className="categoria-card" key={index}>
                <div className="contenido-card">
                  <h3>{nombreCategoria}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
