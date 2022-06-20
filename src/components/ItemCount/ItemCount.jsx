import {useState, useContext} from 'react';
import {MyContext} from '../context/CartContext.jsx';
import "./ItemCount.css";

export default function ItemCount({ stock, inicial }) {
  const [count, setCount] = useState(inicial);
  const [stockCarrito, setStockCarrito] = useState(stock);
  const { onAdd } = useContext(MyContext);

  const sumar = () => {
    count < stock
      ? setCount(count + 1) || setStockCarrito(stockCarrito - 1)
      : alert("no se pueden agregar mas objetos");
  };

  const restar = () => {
    if (count > inicial) {
      setCount(count - 1);
      setStockCarrito(stockCarrito + 1);
    } else {
      alert("no puedes seguir restando objetos");
    }
  };
  const reset = () => {
    setCount(inicial);
    setStockCarrito(stock);
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
      </div>
    </>
  );
}
