import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/CartContext";
import "./ItemCount.css";

export default function ItemCount({ stock, onAdd }) {
  const {stockCarrito} = useContext(MyContext);
  const [count, setCount] = useState(0);

  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : alert("no se pueden agregar mas objetos");
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("no puedes seguir restando objetos");
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="ItemCountContainer mb-5">
        <h5>Stock actual: {stock} </h5>
        <div className="input-group mb-3 widthGroup">
          <button
            className="btn btn-danger"
            type="button"
            id="button-addon1"
            onClick={restar}
          >
            <span className="fontSize">-</span>
          </button>
          <input
            type="text"
            className="form-control"
            readOnly
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={count}
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon1"
            onClick={sumar}
          >
            <span className="fontSize">+</span>
          </button>
        </div>
        {stockCarrito > 0 ? (
          <Link
            to={`/Cart`}
            className="btn btn-danger mt-3"
          >
            Ir a Carrito
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-outline-dark cartButton"
            onClick={() => {
              onAdd(count);
              reset();
            }}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </>
  );
}
