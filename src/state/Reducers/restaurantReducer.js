import {
  ADD_RESTAURANT,
  GET_RESTAURANT_START,
  GET_RESTAURANT,
} from "../Types/types";

const initialState = {
  fetching: false,
  error: "",
  restaurantInfo: {},
//   name: "",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurantInfo: {},
      };
    case GET_RESTAURANT_START:
      return {
        ...state,
        fetching: true,
      };
    case GET_RESTAURANT:
      return {
        ...state,
        fetching: false,
        restaurantInfo: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
