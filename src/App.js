import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Restaurants from "./pages/Restaurants";
import AddRestaurant from "./components/AddRestaurant";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import { Addcity } from "./components/Addcity";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/cities" component={Dashboard} />
        <PrivateRoute
          exact
          path="/cities/restaurants"
          component={AddRestaurant}
        />
        <PrivateRoute
          exact
          path="/cities/restaurant"
          component={Restaurants}
        />
        <PrivateRoute exact path="/add/cities" component={Addcity} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
