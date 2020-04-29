import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    // configuration object
    baseURL: "https://build-restaurant-passport.herokuapp.com/",
    headers: {
      authentication: localStorage.getItem("token")
    }
  });
};
