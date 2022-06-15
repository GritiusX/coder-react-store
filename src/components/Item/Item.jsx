import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ producto }) {
  return (
    <>
      <div className="card darkBody">
        <img
          src={producto.thumbnail}
          className="card-img-top align-self-center"
          alt={producto.title}
        />
        <div className="card-body cardBody">
          <h5 className="card-title">{producto.title}</h5>
          <p className="pe">Price:</p>
          <p className="pe">{producto.price}</p>
          <p className="pe">Rating:</p>
          <p className="pe">{producto.rating}</p>

          <Link
            to={`/Products/${producto.id}`}
            className="btn btn-outline-warning mt-3"
          >
            Buy a <span className="fw-bold yellowText">{producto.title}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
