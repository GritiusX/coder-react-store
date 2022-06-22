import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css";

export default function NavBar() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch("http://localhost:3000/json/products.json")
      .then((res) => res.json())
      .then(
        (data) => setCategories([...new Set(data.map((obj) => obj.category))])
        // data.forEach((obj) => {
        //   mySet.add(obj.category);
        // })
      );
  };

  useEffect(() => {
    getCategories();
  }, []);

  // const categories = [...new Set(info.map((obj) => obj.category))];
  //v1.0 = console.log("categories", data.filter(prods => prods.category === param)[0].category)
  //fetchear products y armar un filter de las categories y de ahi armar un map que de como resultado los Link que necesito para el navbar
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CartWidget />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {categories?.map((link, i) => {
                return (
                  <Link
                    to={`/Categories/${link}`}
                    key={i}
                    className="navbar-brand">
                    {link}
                  </Link>
                );
              })}
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
