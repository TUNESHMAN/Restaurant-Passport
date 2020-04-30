import {
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from "../Types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getCity = () => (dispatch) => {
  dispatch({
    type: FETCH_CITY_START,
  });
  axiosWithAuth()
    .get(`/cities`)
    .then((res) => {
      console.log(res);

      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_CITY_FAILURE,
        payload: error,
      });
    });
};
