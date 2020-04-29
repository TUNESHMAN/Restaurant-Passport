import { FETCH_CITY_START } from "../Types/types";

const initialState = {
  isFetching: false,
  error: "",
  city: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_START:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};

export default cityReducer;
