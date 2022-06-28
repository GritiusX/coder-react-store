import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../components/context/CartContext";

export default function Cart() {
	const { carrito, getItemPrice, deleteItem } = useContext(MyContext);
	console.log(carrito);
	return (
		<div>
			{/* <div>{JSON.stringify(carrito)}</div> */}
			{carrito.length > 0
				? carrito.map((prods) => (
						<article className="mt-3 bg-secondary p-3 mx-3" key={prods.id}>
							<div className="container-fluid">
								<div className="row">
									<div className="col">
										<div>
											<img
												style={{ width: "200px" }}
												src={prods.thumbnail}
												alt={prods.title}
											/>
										</div>
									</div>
									<div className="col d-flex flex-column justify-content-center">
										<p className="fw-bold">Cantidad</p>
										<p>{prods.qty}</p>
									</div>
									<div className="col d-flex flex-column justify-content-center">
										<p className="fw-bold">Producto</p>
										<p>{prods.title}</p>
									</div>
									<div className="col d-flex flex-column justify-content-center">
										<p className="fw-bold">Precio unitario</p>
										<p>{prods.price}</p>
									</div>
									<div className="col d-flex flex-column justify-content-center">
										<p className="fw-bold">Precio total</p>
										<p>{prods.qty * prods.price}</p>
									</div>
									<div className="col d-flex flex-column justify-content-center">
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => deleteItem(prods.id)}
										>
											delete
										</button>
									</div>
								</div>
							</div>
						</article>
				  ))
				: "empty"}
			<p className="fw-bold">Total carrito: ${getItemPrice()}</p>
			<br />
			<Link to="/">Volver a Home </Link>
		</div>
	);
}
