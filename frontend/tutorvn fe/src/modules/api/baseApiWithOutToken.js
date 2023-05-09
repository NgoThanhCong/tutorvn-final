import axios from "axios";
import { notification } from "antd";

export const NEXT_PUBLIC_BASE_URL = "http://localhost:8080"
//process.env.NEXT_PUBLIC_BASE_URL;

let API = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

API.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      //notification.success({ description: response.data.message })
    }
    else if (response.status != 200) {
      notification.error({ description: response.message })
    }
    else {
      notification.error({ description: 'Có lỗi xảy ra' })
    }
    // console.log("BaseApi Response", response)
    return response.data
  }
);

export default API;