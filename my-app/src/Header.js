import React from "react";
import { Link } from "react-router-dom";
import LittleLemonFooter from "../src/images/LittleLemonFooter.png";
import "./Header.css";

const Header = () => {
  return (
    <main>
      <nav className="Navigation_bar">
        <img src={LittleLemonFooter} alt="littleLemonLogo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
