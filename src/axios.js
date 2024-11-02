import axios from "axios";
import { toast } from "sonner";

const axiosService = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: { "Content-Type": "application/json" },
});

axiosService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    // console.log("axios response: ", response);
    if (response.status < 400) {
      return response.data;
    } else {
      // create a toast default notification(few secs) to display error in maybe navigation
      return Promise.reject(response.message);
    }
  },
  (error) => {
    // ==== Handle different kinds of error here
    // console.log("Axios Error: ", error);
    // // if error name is token expired stuff, redirect to login and remove tokenin local storage
    // if (error.response && error.response.status === 401) {
    //   localStorage.removeItem("token");
    //   return Promise.reject(error.response)
    //   // window.location.href = "/login";
    // } else if (error.response && error.response.status === 500) {
    //   // Internal server error
    //   return Promise.reject(error.response);
    // } else {
    //   return Promise.reject(error.response.data || error.response);
    // }
    // if error === 204 ie delete with no content, just show successful notification
    toast.error(error.response.data.message);
    return Promise.reject(error.response);
  }
);
export default axiosService;
