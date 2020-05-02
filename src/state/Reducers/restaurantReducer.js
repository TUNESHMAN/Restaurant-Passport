import { ADD_RESTAURANT } from "../Types/types";

const initialState = {
  fetching: false,
  error: "",
  restaurant: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurant: []
      };

    default:
      return state;
  }
};

export default restaurantReducer;
