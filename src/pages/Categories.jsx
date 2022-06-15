import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Categories() {

  return (
    <>
      <article>
        <h1>esto es categories</h1>
        {/* <ItemDetailContainer /> */}
        <Link to="/" className="btn btn-outline-dark my-3">Ir a home</Link>
      </article>
    </>
  );
}
