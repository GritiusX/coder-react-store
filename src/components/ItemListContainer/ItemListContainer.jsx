import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList";
//import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    fetch("http://localhost:3000/json/products.json")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  };
  useEffect(() => {
    const fetching = new Promise((res, rej) => {
      setTimeout(() => {
        res(getData());
      }, 1000);
    });


    fetching
      .then(setLoading(true))
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, []);

  const onAdd = (count) => {
    alert(`Agregados ${count} productos`);
  };

  return (
    <>
      <article className="itemListContainer">
        <h1 className="greetingItemListContainer">{greeting}</h1>
        {loading && "loading"}
        {error && "hay un error"}
        <ItemList productos={productos} />
        <ItemCount stock={20} inicial={0} onAdd={onAdd} />
      </article>
    </>
  );
}
