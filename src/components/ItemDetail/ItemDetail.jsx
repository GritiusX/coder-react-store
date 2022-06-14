import React, { useEffect } from "react";
import { useState } from "react";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  return (
    <>
      <section className="container">
        <article className="row justify-content-md-center">
          <div className="col justify-content-md-center">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="col justify-content-md-center">
            <h1 className="row">Nombre: {product.title}</h1>
            <p className="row">Description: {product.description}</p>
            <p className="row">Price: {product.price}</p>
            <p className="pe">Rating:</p>
            <p className="pe">{product.rating}</p>
          </div>
        </article>
      </section>
    </>
  );
}
