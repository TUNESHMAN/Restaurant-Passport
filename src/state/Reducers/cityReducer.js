import { FETCH_CITY_START, FETCH_CITY_SUCCESS } from "../Types/types";

const initialState = {
  isFetching: false,
  error: "",
  city: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default cityReducer;
