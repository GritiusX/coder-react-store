import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Character() {
  const { id } = useParams();

  return (
    <>
      <article>
        <ItemDetailContainer id={id} />
        <Link to="/" className="btn btn-outline-dark my-3">Ir a home</Link>
      </article>
    </>
  );
}
