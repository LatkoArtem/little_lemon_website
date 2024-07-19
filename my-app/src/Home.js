import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import RestaurantPhoto from "../src/images/RestaurantPhoto.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate("/reservation");
  };

  return (
    <div className="HomePage">
      <div className="DescriptionHome">
        <div className="DescriptionText">
          <h1>Little Lemon</h1>
          <h2>Kyiv</h2>
          <p>
            Little Lemon is your go-to place for fresh and delicious meals and desserts. This is an ideal place for true
            gourmets who value taste and quality.
          </p>
          <div className="ReserveButton">
            <button type="button" className="ButtonOption" onClick={handleReservationClick}>
              Reserve a table
            </button>
          </div>
        </div>
        <div>
          <img className="RestaurantPhoto" src={RestaurantPhoto} alt="RestaurantPhoto" />
        </div>
      </div>
      <div className="DishesFromChef"></div>
    </div>
  );
};

export default Home;
