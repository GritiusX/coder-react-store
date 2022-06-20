import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ id }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = (elem) => {
    fetch("http://localhost:3000/json/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((prod) => prod.id == elem)));
  };

  useEffect(() => {
    const fetching = new Promise((res, rej) => {
      setTimeout(() => {
        res(getData(id));
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
    }, [id]);
  return (
    <>
      <div>
        {loading && "is loading"}
        {error && "is error"}
        <ItemDetail product={product} />
      </div>
    </>
  );
}
