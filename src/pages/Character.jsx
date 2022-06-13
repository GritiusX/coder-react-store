import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Character({id}) {
  const {Cid} = useParams(id);
  useEffect(() => {
  }, [Cid]);
  
  return (
    <>
     
      <Link to="/">ir a home</Link>
    </>
  );
}
