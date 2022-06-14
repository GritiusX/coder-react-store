import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ id }) {
  const { userId } = useParams(id);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

const getData = (test)=>{
  fetch('http://localhost:3000/json/products.json')
  .then(res => res.json()).then(data => console.log(data.find(prod => prod.id === test)))
}

useEffect(() => {
  console.log('userID',userId);
  
  const fetching = new Promise((res, rej) => {
        setTimeout(() => {
          res(getData(userId));
        }, 1000);
      });
      fetching.then((result)=> console.log(result));
}, [userId]);
  // useEffect(() => {
  //   const getProductDetail = (id) => {
  //     fetch(`http://localhost:3000/json/products.json/`)
  //       .then((res) => res.json())
  //       .then((data) => );
  //   };
  //   const fetching = new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(getProductDetail(userId));
  //     }, 3000);
  //   });

  //   fetching
  //     .then(setLoading(true))
  //     .catch((error) => {
  //       setError(true);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [userId]);
  

  return (
    <>
      {/* <div>
        {loading && "is loading"}
        {error && "is error"}
        <ItemDetail product={product} />
      </div> */}
    </>
  );
}
