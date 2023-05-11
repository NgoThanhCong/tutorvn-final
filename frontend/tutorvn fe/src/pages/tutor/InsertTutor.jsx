import { Radio, DatePicker, Upload, Button, Image } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { privateUserRoute } from '../../utils/privateRoute';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import  React  from 'react';

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
  const [graduated, setGraduated] = useState(true);
  const [experiences, setExperiences] = useState("");
  const [birthday, setBirthday] = useState();
  const [currentJob, setCurrentJob] = useState("");


  const handleChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
      setGender(true);
    }
    else {
      setGender(false);
    }

  };

  const onChangeGraduated = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
      setGraduated(true);
    }
    else {
      setGraduated(false);
    }

  };

  const onChangeBirthDay = (date, dateString) => {
    console.log(date, dateString);
    var dateFix = new Date(dateString); 

    setBirthday(dateFix);
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
    setName(value);
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setEmail(value);
  };

  const onChangeExperiences = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setExperiences(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tutorData = {
      name: name,
      address: address,
      phone: phone,
      gender: gender,
      birthDay: birthday ,
      email: email,
      experiences: experiences,
      currentJob: currentJob,
      confirmed: true,
      isDelete: false,
      avatar: imageUrl,
      university: university,
      major: major,
      isGraduated: true
    };

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

  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);


  return (<>
    <div className='flex flex-auto'>
        <Sidebar />
        <div className='grow bg-sky-700'>
            <Navbar />
            <div className='m-5'>  <body class="antialiased font-sans bg-gray-200">
    <div class="bg-sky-700 container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl text-white font-semibold leading-tight">Insert tutor</h2>
        </div>
      </div>
      <Image
        width={200}
        height={200}
        src={imageUrl}
        fallback="data:image/png;base64,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"
      />
      <br />
      <br />
      <input
        type="file"
        name="myImage"
        onChange={async (event) => {
          // console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          if (event.target.files[0] !== null) {
            let formData = new FormData();
            const accessToken = sessionStorage.getItem("accessToken");
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${accessToken}`

              }
            }
            formData.append('file', event.target.files[0]);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile
           await axios.post(
              "http://localhost:8080/api/v1/FileUpload",
              formData, config
            )
              .then(res => {
                console.log(`Success` + res.data.data);
                setImageUrl(res.data.data);
              })
              .catch(err => {
                console.log(err);
              })
          }

          // call upload image 
        }}
      />

      <br />
      <br />
      <div className="w-1/2">

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
      <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)}
        placeholder="BirthDay" format={dateFormat} onChange={onChangeBirthDay}  />
      <br />
      <br />
      <TextArea rows={4} placeholder="Current Job" maxLength={400} onChange={onChangeCurrentJob} />
      <br />
      <br />

      <TextArea rows={4} placeholder="Description your experients" maxLength={400} onChange={onChangeExperiences} />
      <br />

      <br />
      {/* <TextArea placeholder="Subject" autoSize /> */}
      <br />
      <br />
</div>
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
       
      </div>

      <br />
      <br />
    </div>

  </body></div>
        </div>
    </div>
</>)



}

export default privateUserRoute(InsertTutor);
