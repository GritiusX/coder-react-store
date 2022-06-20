import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  const [unidades, setUnidades] = useState(0);

  const onAdd = (count) => {
    alert(`Agregados ${count} productos`);
  };

  return (
    <>
      <section className="container d-flex flex-column justify-content-center align-items-center">
        <article className="row justify-content-md-center">
          <div className="col justify-content-md-center">
            <img src={product?.thumbnail} alt={product?.title} />
          </div>
          <div className="col justify-content-md-center">
            <h1 className="row">Nombre: {product?.title}</h1>
            <p className="row">Description: {product?.description}</p>
            <p className="row">Price: ${product?.price}</p>
            <p className="pe">Rating:</p>
            <p className="pe">{product?.rating}</p>
          </div>
        </article>
        <ItemCount stock={20} inicial={0} onAdd={onAdd} />
      </section>
    </>
  );
}
