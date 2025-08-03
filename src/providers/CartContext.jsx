import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalPrice = () =>
    cart
      .reduce((total, item) => total + item.quantity * item.precio, 0)
      .toFixed(2);

  return (
    <CartProvider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartProvider>
  );
}
