import React, { Component } from "react";
import Main from "../Components/form/Main";
import "../Components/form/form.css";
import "./order.css";

class Order extends Component {
  render() {
    return (
      <div>
        <div className="order-container">
          <h1>Мыло на заказ</h1>
          <p>
            В данном разделе вы можете самостоятельно выбрать ингредиенты, из
            которых наши специалисты изготовят мыло ручной работы на заказ.
          </p>
        </div>
        <div className="wrapper">
          <Main />
        </div>
      </div>
    );
  }
}

export default Order;
