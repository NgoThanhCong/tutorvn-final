import React, { useEffect, useState } from "react";
import CallAPI2 from "../modules/api/apiWithOutToken";
import { privateUserRoute } from "../utils/privateRoute";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const role_user = sessionStorage.getItem("role");
   // const navigate = useNavigate();
    console.log(role_user);
    if (accessToken) {
      redirect("/tutor");
    }
  },[]);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginCall() {
    const bodyData = { username: username, password: password };
    console.log(bodyData);
    axios
      .post("http://localhost:8080/api/auth/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.accessToken);
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("id", response.data.id);
        sessionStorage.setItem("role", response.data.roles.at(0));
        if (response.data.accessToken) {
          navigate("/tutor");
        }
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if(error.response.status===401){
            //navigate("/login");
            alert("Incorrect username or password. Please try again!!");

          }
        }
      });
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              onClick={
                (e) => {
                  e.preventDefault();
                  loginCall();
                }}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
