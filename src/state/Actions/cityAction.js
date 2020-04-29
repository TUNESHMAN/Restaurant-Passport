import { FETCH_CITY_START } from "../Types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getCity = ()=>(dispatch)=>{
    dispatch({
        type: FETCH_CITY_START,
    })

}