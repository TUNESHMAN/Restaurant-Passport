import React, { useState } from "react";
import axios from "axios";

function Signup(props) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: ""
  });
  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Post Request to register endpoint goes here
    axios
      .post("https://build-restaurant-passport.herokuapp.com/users/register")
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Choose a Username"
          name="username"
          onChange={handleChange}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter a valid password"
          name="password"
          onChange={handleChange}
        />
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Enter an email address"
          name="email"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
