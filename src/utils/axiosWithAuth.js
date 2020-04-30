import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    // configuration object
    baseURL: "https://build-restaurant-passport1.herokuapp.com/",
    headers: {
      authentication: localStorage.getItem(`token`),
    },
  });
};
