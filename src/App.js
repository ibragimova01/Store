import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/header/Header";
import Details from "./Pages/Details";
import Order from "./Pages/Order";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/details/:details_id" component={Details} />
            <Route path="/order-list" component={Orders} />
            <Redirect to="/catalog" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
