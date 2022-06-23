import { useState, createContext } from "react";
export const MyContext = createContext({});

export default function CartContext({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [carrito, setCarrito] = useState([]);

  //metodo Some - boolean - se usa para chequear si el item a agregar ya esta en el carrito o hay que agregarlo - va en itemDetail
  const isInCart = (id) => {
    return carrito.some((cartProd) => cartProd.id === id);
  };

  //va a agregar el item al cart y chequear si hay duplicado... si hay duplicado, aumenta cantidad - va en el itemDetail
  const addItem = (item, qty) => {
    const newItem = { ...item, qty }; //hago destructure del item que me viene y le agrego cantidad para obtener un item Nuevo con todo + la propiedad de cantidad
    //IF - busco si esta el item con la funcion de arriba
    if (isInCart(newItem.id)) {
      //busco el item a traves del id del item que acabo de crear
      const findProduct = carrito.find(
        (productToFind) => productToFind.id === newItem.id
      );
      const productIndex = carrito.indexOf(findProduct); //obtengo el index dentro del array del item que estoy buscando
      const auxArray = [...carrito]; //copio el carrito porque no puedo modificarlo, hago spread de la info que tiene y armo uno exactamente igual para pisar
      auxArray[productIndex].qty += qty; //aumento en X cantidad, la cantidad del producto que encontre
      setCarrito(auxArray); //seteo el carrito viejo con la info nueva del auxArray
    } else {
      setCarrito([...carrito, newItem]);// ojo tiene que estar todo dentro del array
    }
  };

  //va a vaciar el carrito - va en el componente Cart
  const emptyCart = () => {
    setCarrito([]);
  };

  //metodo filter - va a retornar un nuevo array sin el producto seleccionado por ID - va en el Cart
  const deleteItem = (id) => {
    return setCarrito(carrito.filter((arr) => arr.id !== id));
  };

  //metodo reduce - va a retornar la cantidad total de unidades en el state carrito - va en el CartWidget
  const getItemQty = () => {
    return carrito.reduce((acc, iteraVar) => (acc += iteraVar.qty), 0);
  };

  //metodo reduce - va a retornar el precio total de carrito - va en el cart
  const getItemPrice = () => {
    return carrito.reduce(
      (acc, iteraVar) => (acc += iteraVar.qty * iteraVar.price),
      0
    );
  };

  return (
    <MyContext.Provider
      value={{
        darkMode,
        setDarkMode,
        carrito,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
