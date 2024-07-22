import React from "react";
import { useOrder } from "./OrderContext";
import { useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const { orderItems, removeFromOrder, increaseQuantity, decreaseQuantity } = useOrder();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div className="OurMenu OrderTitle">
      <div className="OrderAndMenuButton">
        <h1>Your Order</h1>
        <div className="ButtonMenu">
          <button type="button" className="ButtonGoToMenu" onClick={handleMenuClick}>
            Go to the Menu
          </button>
        </div>
      </div>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index} className="MenuCard">
            <img src={item.photo} alt={item.name} style={{ width: "100%", height: "auto" }} />
            <div className="DescriptionCard">
              <h3 className="NameOfCard">{item.name}</h3>
              <p className="CompositionOfCard">
                <strong>{item.description}</strong>
              </p>
              <p className="PriceOfCard">
                <strong>Price: {item.price}</strong>
              </p>
              <button type="button" className="RemoveButton" onClick={() => removeFromOrder(item.name)}>
                ✖
              </button>
            </div>
            <div className="QuantityDiv">
              <button type="button" className="MinusButton" onClick={() => decreaseQuantity(item.name)}>
                –
              </button>
              <p className="QuantityOfCard">
                <strong>{item.quantity}</strong>
              </p>
              <button type="button" className="PlusButton" onClick={() => increaseQuantity(item.name)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
