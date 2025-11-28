import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}



export function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={item.img} width="120" alt="" />
            <p>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
