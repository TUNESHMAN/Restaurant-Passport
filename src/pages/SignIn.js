import React, { useState } from "react";
import axios from "axios";

function SignIn(props) {
  const [details, setDetails] = useState({
    username: "",
    password: ""
  });

  const handleDetails = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    // make a POST request to the server
    // the server will "authenticate" the user passed on their credentials
    // If they can be authenticated the server will return a token
    axios
      .post("https://build-restaurant-passport.herokuapp.com/users/login")
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/cities')
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleDetails}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleDetails}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SignIn;
