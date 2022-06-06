import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}) {
  const [personajes,setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .catch(error => console.log(error))
    .then(res => setPersonajes(res.results))
  }, [])
console.log(personajes);
  const onAdd = (count) => {
    alert(`Agregados ${count} productos`)
  }

  return (
    <>
    <article className="itemListContainer">
    <h1 className="greetingItemListContainer">{greeting}</h1>
    <ItemList personajes={personajes} />
    <ItemCount stock={20} inicial={0} onAdd={onAdd}/>
    </article>
    </>
  )
}