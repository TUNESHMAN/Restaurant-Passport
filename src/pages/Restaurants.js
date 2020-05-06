import React from "react";
import { getRestaurant } from "../state/Actions/cityAction";
import { connect } from "react-redux";
import { Spin, Card, Menu, Icon } from "antd";
// import SubMenu from "antd/lib/menu/SubMenu";
import { NavLink } from "react-router-dom";
import "./rest.css";

function Restaurants(props) {
  return (
    <div className="rest-side">
      <Menu>
        <Menu.Item key="home">
          <NavLink to="/cities" className="back-nav">
            <Icon type="left" />
            <span className="back">Back to Cities</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="no-rest">
        {!props.restaurantInfo.restaurants && !props.fetching && (
          <h2 className="zero-rest">No restaurant in this city</h2>
        )}
        {props.fetching && (
          <div className="loader">
            <Spin spinning={props.fetching} style={{ color: "white" }} />
          </div>
        )}
        {props.restaurantInfo.restaurants && !props.fetching && (
          <div>
            {props.restaurantInfo.restaurants && !props.fetching && (
              <div className="rest-card">
                {props.restaurantInfo.restaurants.map((restaurant) => (
                  <div className="rest-wrapper">
                    <Card
                      //   bordered={false}
                      style={{
                        width: 300,
                        marginTop: "12px",
                        marginLeft: "15px",
                        marginRight: "15px",
                        marginBottom: "12px",
                      }}
                    >
                      <p>
                        <span className="rest-name">Restaurant Name:</span>
                        <span className="rest-add"> {restaurant.restName}</span>
                      </p>
                      <p>
                        <span className="rest-name">
                          Address of Restaurant:
                        </span>
                        <span className="rest-add">
                          {" "}
                          {restaurant.restAddress}
                        </span>
                      </p>
                      <p>
                        <span className="rest-name">
                          Description of Restaurant
                        </span>
                        <span className="rest-add"> {restaurant.restDesc}</span>
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            )}
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
    // name: state.restaurantList.name,
  };
};

export default connect(mapStateToProps, { getRestaurant })(Restaurants);
