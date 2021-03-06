import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import CartContext from "./components/context/CartContext";

export default function App() {
	return (
		<>
			<CartContext>
				<BrowserRouter>
					<NavBar className="navbar" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/products/:id" element={<Products />} />
						<Route path="/categories/:category" element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContext>
		</>
	);
}
