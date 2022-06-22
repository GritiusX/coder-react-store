import React, { useContext } from "react";
import "./CartWidget.css";
import { GiShoppingCart } from "react-icons/gi";
import { MyContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { getItemQty } = useContext(MyContext);

  return (
    <>
      <Link to="/Cart">
        <span className="btn btn-primary">
          <GiShoppingCart className="red" />
          <span className="badge bg-secondary">{getItemQty()}</span>
        </span>
      </Link>
    </>
  );
}
