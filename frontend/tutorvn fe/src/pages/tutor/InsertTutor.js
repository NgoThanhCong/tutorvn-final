import { Radio, DatePicker, Upload, Button } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InsertTutor = () => {
  const navigate = useNavigate();

  const dateFormat = 'YYYY/MM/DD';
  // const [requestData, setRequestData] = useState({
  //     name: "",
  //     address: "",
  //     phone: "",
  //     gender: true,
  //     birthDay: "",
  //     email: "",
  //     experiences: "",
  //     currentJob: "",
  //     confirmed: false,
  //     isDelete: false,
  //     avatar: "",
  //     university: "",
  //     major: "",
  //     isGraduated: true
  // });
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

  //  experiences: this.experiences,
  //currentJob: this.currentJob,

  //handleChange: function(e) { this.setState({ input: e.target.value }); },
  // const onInsert = () => {
  //     axios.post("http://localhost:8080/api/v1/tutor/insertTutor",
  //         { mode: 'cors' },{
  //             requestData
  //         },
  //         {
  //             headers: {
  //                 Authorization: 'Bearer ' + localStorage.getItem('token')
  //             },
  //         })
  // }
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
    axios.post("http://localhost:8080/api/v1/tutor/insertTutor", tutorData)
      .then((response) => {
        console.log(response.status, response.data);

        navigate("/tutor")
      });
  };




  return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Insert tutor</h2>
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
      <TextArea placeholder="FullName" autoSize onChange={(e) => {
        e.preventDefault();
        setName(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="Email" autoSize onChange={(e) => {
        e.preventDefault();
        setEmail(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="Phone" autoSize onChange={(e) => {
        e.preventDefault();
        setPhone(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="Address" autoSize onChange={(e) => {
        e.preventDefault();
        setAddress(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="University" autoSize onChange={(e) => {
        e.preventDefault();
        setUniversity(e.target.value)
      }} />
      <br />
      <br />
      <TextArea placeholder="Major" autoSize onChange={(e) => {
        e.preventDefault();
        setMajor(e.target.value)
      }} />
      <br />
      <br />
      <Radio.Group name="radiogroup" defaultValue={1} onChange={onChange}   >
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group name="radiogroup2" defaultValue={1} onChange={onChangeGraduated}  >
        <Radio value={1}>Graduated</Radio>
        <Radio value={2}>Student</Radio>
      </Radio.Group>
      <br />
      <br />
      <DatePicker defaultValue={dayjs('2015/01/01', dateFormat) }
        placeholder="BirthDay" format={dateFormat} onChange={onChangeBirthDay} />
      <br />
      <TextArea rows={4} placeholder="Current Job" maxLength={400} onChange={onChangeCurrentJob} />
      <br />
      <TextArea rows={4} placeholder="Description your experients" maxLength={400} onChange={onChangeExperiences} />
      <br />
      
      <br />
      {/* <TextArea placeholder="Subject" autoSize /> */}
      <br />
      <br />

      <div class="w-full flex justify-start space-x-2">
        <button onClick=
          {
            handleSubmit
          }
          
          type="button"
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


}

export default InsertTutor;
