import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/image.png";
import "./form.css";

const FormHeader = (props) => {
  return (
    <div className="logo-header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo"/>
      </Link>
    </div>
  );
};
export default FormHeader;
