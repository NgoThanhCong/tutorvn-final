import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { DatePicker, Image, Radio } from "antd";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import dayjs from 'dayjs';

const ChangePassword = () => {

  const dateFormat = 'YYYY/MM/DD';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState(true);
  const [graduated, setGraduated] = useState(true);
  const [experiences, setExperiences] = useState("");
  const [birthday, setBirthday] = useState();
  const [currentJob, setCurrentJob] = useState("");
    const [imageUrl, setImageUrl] = useState("https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png");
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
      <TextArea placeholder="OldPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setName(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="NewPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setEmail(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="Confirm NewPassword" autoSize onChange={(e) => {
        e.preventDefault();
        setPhone(e.target.value)
      }} />

      </div>
      
    
      <br />
      <br />
      

      <div class="w-full flex justify-start space-x-2">
        <button onClick=
          {()=>{}
           // handleSubmit
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