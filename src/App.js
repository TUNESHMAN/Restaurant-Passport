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
import PrivateRoute from "./components/PrivateRoute";
import { Addcity } from "./components/Addcity";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/cities" component={Cities} />
        <PrivateRoute exact path="/add/cities" component={Addcity} />
        <PrivateRoute exact path="/cities/restaurants" component={Restaurants} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
