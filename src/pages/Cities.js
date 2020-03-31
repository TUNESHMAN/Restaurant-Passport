import React from "react";
import axios from "axios";

function Cities() {
  axios
    .get("https://build-restaurant-passport.herokuapp.com/cities")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(`This is an error`);
    });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Cities;
