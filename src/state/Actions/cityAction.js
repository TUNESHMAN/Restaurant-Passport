import {
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  GET_RESTAURANT_START,
  GET_RESTAURANT,
} from "../Types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import SuccessModal from "../../components/SuccessModal";
import WarningModal from "../../components/WarningModal";

export const getCity = () => (dispatch) => {
  dispatch({
    type: FETCH_CITY_START,
  });
  axiosWithAuth()
    .get(`/cities`)
    .then((res) => {
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
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

export const postRestaurant = (restaurantPayload) => (dispatch) => {
  axiosWithAuth()
    .post(`/cities/restaurants`, restaurantPayload)
    .then((res) => {
      SuccessModal();
    })
    .catch((error) => {
      WarningModal();
    });
};

export const getRestaurant = (id) => (dispatch) => {
  dispatch({
    type: GET_RESTAURANT_START,
  });
  axiosWithAuth()
    .get(`/cities/${id}/restaurants`)
    .then((res) => {
      dispatch({
        type: GET_RESTAURANT,
        payload: res.data,
      });
    })
    .catch((error) => {});
};
