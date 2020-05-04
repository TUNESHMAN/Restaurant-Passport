import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { getRestaurant } from "../state/Actions/cityAction";
import { connect } from "react-redux";
import { Spin, Card } from "antd";

function Restaurants(props) {
  return (
    <div>
      <NavBar />
      <div>
        {!props.restaurantInfo.restaurants && !props.fetching && (
          <h2>No restaurant in this city</h2>
        )}
        {props.fetching && (
          <div>
            <Spin spinning={props.fetching} />
          </div>
        )}
        {props.restaurantInfo.restaurants && !props.fetching && (
          <div>
            {props.restaurantInfo.restaurants && !props.fetching && (
              <div>
                <h2>
                  These are the restaurants in {props.restaurantInfo.name}
                </h2>
                {props.restaurantInfo.restaurants.map((restaurant) => (
                  <div className="card-wrapper">
                    <Card
                      title="Card title"
                      bordered={false}
                      style={{ width: 300 }}
                    >
                      <p>
                        <span>Restaurant Name:</span>
                        <span>{restaurant.restName}</span>
                      </p>
                      <p>
                        <span>Address of Restaurant:</span>
                        <span>{restaurant.restAddress}</span>
                      </p>
                      <p>
                        <span>Description of Restaurant</span>
                        <span>{restaurant.restDesc}</span>
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
