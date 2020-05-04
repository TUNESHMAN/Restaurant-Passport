import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCity, getRestaurant } from "../state/Actions/cityAction";
import { Spin, Card } from "antd";
import globe from "../images/globe.jpg";
import { EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./Styles.css";

const { Meta } = Card;

function Cities(props) {
  let history = useHistory();
  console.log(props);

  const handleView = (id) => {
    console.log(`clicked`);
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
        <div>
          {props.city.map((rest) => (
            <div className="site-card-wrapper">
              {/* <Row gutter={16}> */}
              {/* <Col span={8}> */}
              <Card
                key={rest.id}
                hoverable
                style={{ width: 300, borderRadius: "8px" }}
                cover={<img alt="globe" src={globe} />}
                actions={[
                  // <PlusOutlined key="plus" />,
                  // <p>Add a Restaurant</p>,
                  // <>View Restaurants</>,

                  <EyeOutlined key="eye" onClick={() => handleView(rest.id)} />,
                ]}
              >
                <p>
                  <span className="cityDesc">City:</span>
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
