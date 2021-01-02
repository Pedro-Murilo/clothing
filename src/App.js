import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.js";
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
