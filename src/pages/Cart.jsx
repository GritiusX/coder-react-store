import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../components/context/CartContext";

export default function Cart() {
	const { carrito, getItemPrice, deleteItem } = useContext(MyContext);
	console.log(carrito);
	return (
		<div>
			<div>{JSON.stringify(carrito)}</div>
			{carrito.length > 0
				? carrito.map((prods) => (
						<article key={prods.id}>
							<div>
								<p>{prods.qty}</p>
								<p>{prods.title}</p>
								<p>{prods.price}</p>
								<p>{prods.qty * prods.price}</p>
								<button onClick={() => deleteItem(prods.id)}>delete</button>
							</div>
						</article>
				  ))
				: "empty"}
			{getItemPrice()}
			<br />
			<Link to="/">Volver a Home </Link>
		</div>
	);
}
