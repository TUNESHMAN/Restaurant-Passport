import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Restaurants from "./pages/Restaurants";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/cities/restaurants" component={Restaurants} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
