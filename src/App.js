import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar className="navbar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/categories/:category" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
