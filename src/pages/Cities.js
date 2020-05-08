import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCity, getRestaurant } from "../state/Actions/cityAction";
import { Spin, Card } from "antd";
import globe from "../images/globe.jpg";
import { EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./Styles.css";

function Cities(props) {
  let history = useHistory();

  const handleView = (id) => {
    history.push(`/cities/restaurant`);
    props.getRestaurant(id);
  };
  useEffect(() => {
    props.getCity();
  }, []);
  return (
    <div>
      {!props.city && !props.isFetching && <h2>There is no city</h2>}
      {props.isFetching && (
        <div className="spin">
          <Spin size="large" spinning={props.isFetching} />
        </div>
      )}
      {props.city && !props.isFetching && (
        <div className="city-card">
          {props.city.map((rest) => (
            <div className="site-card-wrapper">
              <Card
                key={rest.id}
                hoverable
                style={{
                  width: 300,
                  borderRadius: "12px",
                  marginBottom: "18px",
                }}
                cover={<img alt="globe" src={globe} />}
                actions={[
                  <EyeOutlined key="eye" onClick={() => handleView(rest.id)} />,
                ]}
              >
                <p>
                  {/* <span className="cityDesc">City:</span> */}
                  <span className="cityName">{rest.name}</span>
                </p>
              </Card>
              {/* </Col> */}
              {/* </Row> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    isFetching: state.cityList.isFetching,
    city: state.cityList.city,
    error: state.cityList.error,
  };
};

export default connect(mapStateToProp, { getCity, getRestaurant })(Cities);
