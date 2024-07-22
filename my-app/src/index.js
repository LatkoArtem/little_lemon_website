import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { OrderProvider } from "./OrderContext";

ReactDOM.render(
  <OrderProvider>
    <App />
  </OrderProvider>,
  document.getElementById("root")
);
