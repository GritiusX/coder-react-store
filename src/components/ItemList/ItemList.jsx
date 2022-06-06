import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({personajes}) {
  return (
    <>
     {personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)} 
    </>
  )
}