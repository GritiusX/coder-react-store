import { useState, createContext } from "react";
export const MyContext = createContext({});

export default function CartContext({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [stockCarrito, setStockCarrito] = useState(0);

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode, stockCarrito, setStockCarrito }}>
      {children}
    </MyContext.Provider>
  );
}
