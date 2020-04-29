import React from "react";
import { connect } from "react-redux";
import { getCity } from "../state/Actions/cityAction";

function Cities(props) {
  return <div>{!props.city && <h2>There is no city</h2>}</div>;
}

const mapStateToProp = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    city: state.city,
  };
};

export default connect(mapStateToProp, { getCity })(Cities);
