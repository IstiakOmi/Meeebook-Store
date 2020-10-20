import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Default from "./components/Default";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/details">
          <Details />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route exact path="/">
          <ProductList />
        </Route>

        <Route>
          <Default />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
