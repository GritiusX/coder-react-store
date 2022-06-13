import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Character() {
  const {id} = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  
  return (
    <>
     <h1>{id}</h1>
      <Link to="/">ir a home</Link>
    </>
  );
}
