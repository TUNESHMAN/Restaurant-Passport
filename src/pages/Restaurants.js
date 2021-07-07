import React from "react";
import { getRestaurant } from "../state/Actions/cityAction";
import { connect } from "react-redux";
import { Spin, Card, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import bg from "../images/bg.jpg";
import "./rest.css";
import { AlignLeftOutlined } from "@ant-design/icons";

function Restaurants(props) {
  return (
    <div>
      <div className="rest-side">
        <ul>
          <li>
            <NavLink className="path" to="/cities">Back to Cities</NavLink>
          </li>
          <li>
            <NavLink className="path" to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink className="path" to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      <div
        className="no-rest"
      >
        {props.fetching ? (
          <div className="loader">
            <Spin spinning={props.fetching} style={{ color: "white" }} />
          </div>
        ) : props.restaurantInfo.restaurants === undefined ||
          props.restaurantInfo.restaurants.length === 0 ? (
          <h2 className="zero-rest">No restaurant in this city</h2>
        ) : (
          <div className="rest-card">
            {props.restaurantInfo.restaurants.map((restaurant) => (
              <div className="rest-wrapper">
                <Card
                  style={{
                    width: 300,
                    marginTop: "12px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    marginBottom: "12px",
                    borderRadius: "12px",
                    backgroundColor:"teal"
                  }}
                >
                  <p>
                    <span className="rest-name">Restaurant Name:</span>
                    <span className="rest-add"> {restaurant.restName}</span>
                  </p>
                  <p>
                    <span className="rest-name">Address of Restaurant:</span>
                    <span className="rest-add"> {restaurant.restAddress}</span>
                  </p>
                  <p>
                    <span className="rest-name">Description of Restaurant</span>
                    <span className="rest-add"> {restaurant.restDesc}</span>
                  </p>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.restaurantList.fetching,
    error: state.restaurantList.error,
    restaurantInfo: state.restaurantList.restaurantInfo,
  };
};

export default connect(mapStateToProps, { getRestaurant })(Restaurants);
