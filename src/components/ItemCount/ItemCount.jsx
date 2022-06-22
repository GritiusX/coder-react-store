import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/CartContext";
import "./ItemCount.css";

export default function ItemCount({ stock, onAdd, qty, setQty }) {
  const { carrito } = useContext(MyContext);

  const sumar = () => {
    qty < stock
      ? setQty(qty + 1)
      : alert("no se pueden agregar mas objetos");
  };

  const restar = () => {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      alert("no puedes seguir restando objetos");
    }
  };
  const reset = () => {
    setQty(0);
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
            value={qty}
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
        {carrito > 0 ? (
          <Link to={`/Cart`} className="btn btn-danger mt-3">
            Ir a Carrito
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-outline-dark cartButton"
            onClick={() => {
              onAdd();
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
