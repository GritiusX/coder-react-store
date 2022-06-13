import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Character() {
  const {id} = useParams();
  useEffect(() => {
  }, [id]);
  
  return (
    <>
     
      <Link to="/">ir a home</Link>
    </>
  );
}
