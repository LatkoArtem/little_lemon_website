import React from "react";
import LittleLemonLogo from "../src/images/LittleLemonLogo.jpg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterMain">
        <div>
          <img src={LittleLemonLogo} alt="Little Lemon logo" />
        </div>
        <div className="Docnav">
          <h3>Document navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
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
        </div>
        <div className="Contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <p>Adress: 1234 Elm Street</p>
            </li>
            <li>
              <p>Phone Number: +380935556677</p>
            </li>
            <li>
              <p>Email: littlelemon77@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="Sociallinks">
          <h3>Social Media Links</h3>
          <ul>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <h4>Copyright © Little Lemon. Latko Artem</h4>
      </div>
    </div>
  );
};

export default Footer;
