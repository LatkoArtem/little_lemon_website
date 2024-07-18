import React from "react";
import LittleLemonFooter from "../src/images/LittleLemonFooter.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="Navigation_bar">
      <img src={LittleLemonFooter} alt="littleLemonLogo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservation">Reservation</a>
        </li>
        <li>
          <a href="/order">Order online</a>
        </li>
        <li>
          <a href="/login">Log in</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
