import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ id }) {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacterDetail = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  };
  useEffect(() => {
    const fetching = new Promise((res, rej) => {
      setTimeout(() => {
        res(getCharacterDetail(id));
      }, 3000);
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
  //

  return (
    <>
      <div>
        {loading && "is loading"}
        {error && "is error"}
        <ItemDetail character={character} />
      </div>
    </>
  );
}
