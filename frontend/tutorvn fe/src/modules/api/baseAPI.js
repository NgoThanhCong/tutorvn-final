import axios from "axios";
//import { notification } from "antd";

export const NEXT_PUBLIC_BASE_URL = "http://localhost:8080"

let API = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

API.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      //console.log("Config headers: ", config);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    // const { success, message } = response.data
    if (response.status = 200) {
      //notification.success({ description: response.data.message })
    }
    else if (response.status != 200) {
     // notification.error({ description: response.message })
    }
    else {
      //notification.error({ description: 'Có lỗi xảy ra' })
    }
    // console.log("BaseApi Response", response)
    return response.data
  }
);

export default API;