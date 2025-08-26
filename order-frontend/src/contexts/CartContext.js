import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // store placed orders
  const [user, setUser] = useState(null); //add user state

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const clearCart = () => setCart([]);

  const placeOrder = (orderType) => {
    if (!cart.length) return false;
    const newOrder = {
      id: Date.now(),
      type: orderType,
      items: cart,
      status: "Placed",
      date: new Date().toLocaleString(),
    };
    setOrders((prev) => [...prev, newOrder]);
    clearCart();
    return true;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, orders, placeOrder, user, setUser, }}>
      {children}
    </CartContext.Provider>
  );
};
