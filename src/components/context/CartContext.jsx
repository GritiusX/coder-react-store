import { useState, createContext } from "react";
export const MyContext = createContext({});

export default function CartContext({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const onAdd = (count) => {
    alert(`Agregados ${count} productos`);
  };

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode, onAdd }}>
      {children}
    </MyContext.Provider>
  );
}
