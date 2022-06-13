import React from "react";
import "./ItemDetail.css";

export default function ItemDetail({ character }) {
  return (
    <>
      <section className="container">
        <article className="row justify-content-md-center">
          <div className="col justify-content-md-center">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="col justify-content-md-center">
          <h1 className="row">Nombre: {character.name}</h1>
          <h3 className="row">Sexo: {character.gender}</h3>
          <h3 className="row">Origen: {character.origin.name}</h3>
          </div>
        </article>
      </section>
    </>
  );
}
