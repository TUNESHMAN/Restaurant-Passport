import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCity } from "../state/Actions/cityAction";

function Cities(props) {
  console.log(props);

  useEffect(() => {
    props.getCity();
  }, []);
  return (
    <div>{!props.city && !props.isFetching && <h2>There is no city</h2>}</div>
  );
}

const mapStateToProp = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    city: state.city,
  };
};

export default connect(mapStateToProp, { getCity })(Cities);
