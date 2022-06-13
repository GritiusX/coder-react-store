import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ personaje }) {
  const log = (id) =>{
    console.log(id);
  }

  return (
    <>
      <div className="card">
        <img
          src={personaje.image}
          className="card-img-top"
          alt={personaje.name}
        />
        <div className="card-body darkBody">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="fw-bold pe">Lugar de nacimiento:</p>
          <p className="pe">{personaje.origin.name}</p>
          <p className="fw-bold pe">Especie:</p>
          <p className="pe">{personaje.species}</p>
          <Link to={`/Character/${personaje.id}`} className="btn btn-outline-warning mt-3" onClick={() => log(personaje.id)}>
            Buy a <span className="fw-bold yellowText">{personaje.name}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
