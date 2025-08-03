export function Banner() {
  return (
    <section className="bg-[linear-gradient(135deg,#ff6b35,#ff8e9b,#7bdcb5,#8ed1fc)] bg-[length:200%_200%] animate-[gradient-move_10s_ease_infinite] text-center py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          ¡Bienvenido a VariaStore!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mt-4 mb-8 max-w-xl">
          Todo lo que necesitas, en un solo lugar
        </p>
      </div>
    </section>
  );
}
