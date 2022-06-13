import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home";
import Character from "./pages/Character";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar className="navbar" />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/characters/:id" element={<Character/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}
