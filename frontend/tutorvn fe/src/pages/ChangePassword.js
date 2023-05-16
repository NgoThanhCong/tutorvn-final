import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { DatePicker, Image, Input, Radio } from "antd";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

  const navigate = useNavigate();

  const dateFormat = 'YYYY/MM/DD';
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png");
  const [errorOld, setErrorOld]= useState();
  const [errorNew, setErrorNew]= useState();
  const [errorConfirmNew, setErrorConfirmNew] = useState();
  const changePasswordRequest =  (e) =>{
    e.preventDefault();
    if(newPassword!= confirmNewPassword){
      setErrorConfirmNew("New Password and Confirm Password Doesn't Match");
      setErrorNew("New Password and Confirm Password Doesn't Match");
      alert("New Password and Confirm Password Doesn't Match");
    }else 
    if(newPassword == oldPassword){
      setErrorNew("New Password and Old Password Are Same");
    }else {
      const url_changePassword = "http://localhost:8080/api/user/changePassWord?oldPassword=" 
      + oldPassword 
      + "&newPassword=" + newPassword;
      // console.log("AAAAAAA2:"+ url_changePassword)
      const access_token = sessionStorage.getItem("accessToken");
      // console.log("AAAAAAA3:"+ access_token)
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get(url_changePassword, {
          headers: {
              'Authorization': `Bearer ${access_token}`
          }
          })
          .then((res) => {
              console.log(res.data)
              alert("Change password successful");
              navigate("/login");

          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              if(error.response.status===401){
                //navigate("/login");
                alert("Cannot change password");

              }
            }
          });
  
    }
   
  }
 

    return (<>
        <div className='flex flex-auto h-screen'>
            <Sidebar />
            <div className='grow  bg-sky-700'>
                <Navbar />

                <div className='m-5'>
                    <body class="antialiased font-sans">
                        <div class="container mx-auto px-4 sm:px-8 bg-sky-700 ">

                        <div class="py-8">
        <div>
          <h2 class="text-2xl text-white font-semibold leading-tight">
            Change Password</h2>
        </div>
      </div>
      
    <br />
      <br />

      <div className="w-1/3">
      <Input.Password placeholder="OldPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setOldPassword(e.target.value)
      }} />
      <span style={{ color: "red" }}>{errorOld}</span>

      <br />
      <br />
      <Input.Password  placeholder="NewPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setNewPassword(e.target.value)
      }} />
      <span style={{ color: "red" }}>{errorNew}</span>

      <br />
      <br />
      <Input.Password placeholder="Confirm NewPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setConfirmNewPassword(e.target.value)
      }} />
      <span style={{ color: "red" }}>{errorConfirmNew}</span>


      </div>
      
    
      <br />
      <br />
      

      <div class="w-full flex justify-start space-x-2">
        <button 
          onClick=
          {
            changePasswordRequest
          }

          type="button"
          class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium
           uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
           duration-150 ease-in-out hover:bg-primary-600 
           hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

          Update Password
        </button>
       
      </div>

      <br />
      <br />
    </div>
    


      
                    </body>
            </div>
            </div>
        </div>
    </>)
};

export default ChangePassword;