import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { category } = useParams();

  const getData = () => {
    fetch("http://localhost:3000/json/products.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          setProductos(
            data.filter((productos) => productos.category == category)
          );
        } else {
          setProductos(data);
        }
      });
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
  }, [category]);

  return (
    <>
      <article className="itemListContainer">
        <h1 className="greetingItemListContainer">{greeting}</h1>
        {loading && "loading"}
        {error && "hay un error"}
        <ItemList productos={productos} />
      </article>
    </>
  );
}
