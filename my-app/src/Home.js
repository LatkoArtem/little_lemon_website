import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./Menu.css";
import { menuItems } from "./Menu";
import RestaurantPhoto from "../src/images/RestaurantPhoto.jpg";

const filteredMenuItems = menuItems.filter((item) => item.fromChef);

const Home = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate("/reservation");
  };

  const handleMenuClick = () => {
    navigate("/menu");
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
      <div className="DishesFromChef">
        <div className="DishesFromChefTitle">
          <h1>Dishes from Chef</h1>
          <div className="MenuButton">
            <button type="button" className="ButtonGoToMenu" onClick={handleMenuClick}>
              Go to the Menu
            </button>
          </div>
        </div>
        <div className="OurMenu">
          <ul>
            {filteredMenuItems.map((item, index) => (
              <li key={index} className="MenuCard">
                {item.fromChef && <div className="icon" />}
                <img src={item.photo} alt={item.name} style={{ width: "100%", height: "auto" }} />
                <div className="DescriptionCard">
                  <h3 className="NameOfCard">{item.name}</h3>
                  <p className="CompositionOfCard">
                    <strong>{item.description}</strong>
                  </p>
                  <p className="PriceOfCard">
                    <strong>Price: {item.price}</strong>
                  </p>
                </div>
                <div className="AddToOrderButtonDiv"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
