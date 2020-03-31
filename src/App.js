import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/cities" component={Cities} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
