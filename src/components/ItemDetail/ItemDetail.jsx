import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext, useState } from "react";
import { MyContext } from "../context/CartContext.jsx";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
	const { isInCart, addItem } = useContext(MyContext);
	const [qty, setQty] = useState(1);

	const onAdd = () => {
		isInCart(product.id);
		addItem(product, qty);
	};

	return (
		<>
			<section className="container d-flex flex-column justify-content-center align-items-center mt-5">
				<article className="row justify-content-md-center">
					<div className="col justify-content-md-center">
						<img src={product?.thumbnail} alt={product?.title} />
					</div>
					<div className="col justify-content-md-center">
						<h1 className="row">Nombre: {product?.title}</h1>
						<p className="row">Description: {product?.description}</p>
						<p className="row">Price: ${product?.price}</p>
						<p className="pe">Rating:</p>
						<p className="pe">{product?.rating}</p>
						<p className="pe">stock: {product?.stock}</p>
					</div>
				</article>
				<ItemCount
					qty={qty}
					setQty={setQty}
					stock={product.stock}
					onAdd={onAdd}
				/>
			</section>
		</>
	);
}
