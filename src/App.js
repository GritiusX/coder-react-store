import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar className="navbar" />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<Products/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}
