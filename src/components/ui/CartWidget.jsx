import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../providers/CartContext";
import { Link } from "react-router-dom";

export function CartWidget() {
  const { getCartQuantity } = useContext(CartContext);
  const quantity = getCartQuantity();

  return (
    <Link to="/cart" className="relative">
      <FontAwesomeIcon icon={faCartShopping} size="lg" />
      {quantity > 0 && (
        <div className="absolute -top-2 -right-2 bg-[#8ed1fc] text-[#0f1419] text-xs font-bold px-2 py-0.5 rounded-full">
          {quantity}
        </div>
      )}
    </Link>
  );
}
