import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    color: "white",
    cursor: "pointer",
  };

  return (
    <>
      <h2 className="logo">
        HGW
      </h2>
      <div className="navbar">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <FaFacebookF
            style={style}
            onMouseOver={({ target }) => (target.style.color = "black")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
          <span></span>
          <FaInstagram
            style={style}
            onMouseOver={({ target }) => (target.style.color = "black")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
