import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Products() {
  const { id } = useParams();
  console.log('Products id',id);

  return (
    <>
      <article>
        <ItemDetailContainer id={id} />
        <Link to="/" className="btn btn-outline-dark my-3">Ir a home</Link>
      </article>
    </>
  );
}
