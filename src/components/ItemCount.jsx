export function ItemCount({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-[#0f1419] rounded-lg border border-[#8ed1fc]">
        <button
          onClick={decrementQuantity}
          className="px-4 py-2 text-[#8ed1fc] hover:bg-[#8ed1fc] hover:text-[#0f1419] transition rounded-l-lg font-bold text-xl cursor-pointer"
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="99"
          className="w-16 px-2 py-2 text-center bg-transparent border-none outline-none"
        />
        <button
          onClick={incrementQuantity}
          className="px-4 py-2 text-[#8ed1fc] hover:bg-[#8ed1fc] hover:text-[#0f1419] transition rounded-r-lg font-bold text-xl cursor-pointer"
          disabled={quantity >= 99}
        >
          +
        </button>
      </div>
      <span className="text-gray-300">
        {quantity === 1 ? "1 unidad" : `${quantity} unidades`}
      </span>
    </div>
  );
}
