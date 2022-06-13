import Item from "../Item/Item";
import "./ItemList.css";
//personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)
export default function ItemList({ personajes }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-3 px-5">
        {personajes?.map((personaje) => (
          <Item key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </>
  );
}
