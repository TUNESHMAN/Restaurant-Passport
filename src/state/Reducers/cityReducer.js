import { FETCH_CITY_START, FETCH_CITY_SUCCESS, ADD_CITY } from "../Types/types";

const initialState = {
  isFetching: false,
  error: "",
  city: [],
  //   cityData: {},
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
        isFetching: false,
        city: action.payload,
      };

    case ADD_CITY:
      const newCity = state.city.concat(action.payload);
      console.log(newCity);

      return {
        ...state,
        city: newCity,
      };

    default:
      return state;
  }
};

export default cityReducer;
