import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../components/context/CartContext";

export default function Cart() {
  const { carrito } = useContext(MyContext);
  return (
    <div>
      {carrito.length > 0 ? carrito.map((prods, i) => <h1 key={i}>{prods.title}</h1>) : "empty"}
      <br />
      <Link to="/">Volver a Home </Link>
    </div>
  );
}
