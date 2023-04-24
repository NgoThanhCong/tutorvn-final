import { DatePicker, Radio, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const EditTutor = () => {
    const { state } = useLocation();
    console.log(state.value);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");
    const [gender, setGender] = useState(true);
    const [graduated, setGraduated]= useState(true);
    const [experiences, setExperiences] = useState("");
    const [birthday, setBirthday]  = useState("");
    const [currentJob, setCurrentJob] = useState("");

    const handleChangeEmail = (e) => {
        e.preventDefault();
         const value = e.target.value;
         console.log(value);    
     };
     const onChange = (e) => {
       console.log('radio checked', e.target.value);
       if (e.target.value === 1  )
       {
         setGender(true);
       }
       else  {
         setGender(false);
       }
       
     };
     
     const onChangeGraduated = (e) => {
       console.log('radio checked', e.target.value);
       if (e.target.value === 1  )
       {
         setGraduated(true);
       }
       else  {
         setGraduated(false);
       }
       
     };
   
     const onChangeBirthDay = (date, dateString) => {
       console.log(date, dateString);
   
       setBirthday(dateString);
     };
     
     const onChangeCurrentJob = (e) => {
       e.preventDefault();
        const value = e.target.value;
        console.log(value);  
        setCurrentJob(value);  
    };
   
    const onChangeName = (e) => {
     e.preventDefault();
      const value = e.target.value;
      console.log(value);  
      setName (value);  
   };
   const onChangeEmail = (e) => {
     e.preventDefault();
      const value = e.target.value;
      console.log(value);  
      setEmail (value);  
   };
   
    const onChangeExperiences = (e) => {
     e.preventDefault();
      const value = e.target.value;
      console.log(value);   
      setExperiences (value); 
   };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tutorData = {
          name: name,
          address: address ,
          phone: phone,
          gender: gender,
          birthDay: "2020-10-01T15:06:16Z",
          email: email,
          experiences: experiences,
          currentJob: currentJob,
          confirmed: true,
          isDelete: false,
          avatar: "ABCD",
          university: university,
          major: major,
          isGraduated: true
        };
    
        // const data = {
        //   name: "vu van",
        //   address: "Ha Noi Viet Nam ",
        //   phone: "+84965741051",
        //   gender: true,
        //   birthDay: "2020-10-01T15:06:16Z",
        //   email: "congngole@gmail.com",
        //   experiences: "Nhieu vi tri trong nganh giao duc ",
        //   currentJob: "Teacher",
        //   confirmed: true,
        //   isDelete: false,
        //   avatar: "ABCD",
        //   university: "FPT",
        //   major: "CNTT",
        //   isGraduated: true
        // }
    
        console.log(tutorData);
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post("http://localhost:8080/api/v1/tutor/updateinfo", tutorData)
          .then((response) => {
            console.log(response.status, response.data);
    
            Navigate("/tutor")
          });
      };
    
    
     return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Edit Tutor</h2>
        </div>
      </div>

      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

      >
        <img
          // src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />

      </Upload>
      <TextArea value={state.value.id} placeholder="ID" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />

    <br/>
    <br/>
      <TextArea defaultValue={state.value.name} placeholder="FullName" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />

      <br />
      <TextArea defaultValue={state.value.email} placeholder="Email" autoSize onChange={(e) => {}} />
      <br />
      <br />
      <TextArea defaultValue={state.value.phone} placeholder="Phone" autoSize onChange={(e) => {
        e.preventDefault();
       
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.address} placeholder="Address" autoSize onChange={(e) => {
        e.preventDefault();
       
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.university}  placeholder="University" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.major} placeholder="Major" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />
      <br />
      <Radio.Group defaultValue={state.value.gender===true?1:2} name="radiogroup"  >
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group defaultValue={state.value.graduated===true?1:2} name="radiogroup2"    >
        <Radio value={1}>Graduated</Radio>
        <Radio value={2}>Student</Radio>
      </Radio.Group>
      <br />
      <br />
      {/* <DatePicker defaultValue={dayjs('2015/01/01', dateFormat) }
        placeholder="BirthDay" format={dateFormat}  />
      <br /> */}
      <TextArea defaultValue={state.value.currentJob} rows={4} placeholder="Current Job" maxLength={400} />
      <br />
      <br/>
      <TextArea defaultValue={state.value.experiences} rows={4} placeholder="Description your experients" maxLength={400}  />
      <br />
      
      <br />
      {/* <TextArea placeholder="Subject" autoSize /> */}
      <br />
      <br />

      <div class="w-full flex justify-start space-x-2">
        <button 
         onClick=
        {
          handleSubmit
        }
          
          type="Save"
          class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium
           uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
           duration-150 ease-in-out hover:bg-primary-600 
           hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              
          Insert Tutor
        </button>
        {/* <button
                            type="button"
                            class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Add Tutor2
                        </button> */}
      </div>

      <br />
      <br />
    </div>

  </body>
};

export default EditTutor;