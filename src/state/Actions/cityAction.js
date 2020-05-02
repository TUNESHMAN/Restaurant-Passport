import {
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  ADD_CITY,
} from "../Types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getCity = () => (dispatch) => {
  dispatch({
    type: FETCH_CITY_START,
  });
  axiosWithAuth()
    .get(`/cities`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CITY_FAILURE,
        payload: error,
      });
    });
};

export const addCity = (cityPayload) => (dispatch) => {
  axiosWithAuth()
    .post(`/cities`, cityPayload)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postRestaurant = (restaurantPayload) => (dispatch) => {
  axiosWithAuth()
    .post(`/cities/restaurants`, restaurantPayload)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
