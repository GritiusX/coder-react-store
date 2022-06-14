import Item from "../Item/Item";
import "./ItemList.css";
//personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)
export default function ItemList({ productos }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-3 px-5">
        {productos?.map((producto) => (<Item key={producto.id} producto={producto} />))}
      </div>
    </>
  );
}
