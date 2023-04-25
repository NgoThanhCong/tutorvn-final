import { DatePicker, Image, Radio, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const EditTutor = () => {
  const { state } = useLocation();
  console.log(state.value);


  const [imageUrl, setImageUrl] = useState(state.value.avatar);
  const [selectedImage, setSelectedImage] = useState(null);

  const [name, setName] = useState(state.value.name);
  const [email, setEmail] = useState(state.value.email);
  const [phone, setPhone] = useState(state.value.phone);
  const [address, setAddress] = useState(state.value.address);
  const [university, setUniversity] = useState(state.value.university);
  const [major, setMajor] = useState(state.value.major);
  const [gender, setGender] = useState(true);
  const [graduated, setGraduated] = useState(true);
  const [experiences, setExperiences] = useState(state.value.experiences);
  const [birthday, setBirthday] = useState(state.value.birthDay);
  const [currentJob, setCurrentJob] = useState(state.value.currentJob);

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
      birthDay: "2020-10-01T15:06:16Z",
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
    axios.put("http://localhost:8080/api/v1/tutor/update", tutorData)
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
        onChange={(event) => {
          // console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          if (selectedImage !== null) {
            let formData = new FormData();
            const config = {
              headers: {
                'content-type': 'multipart/form-data'
              }
            }
            formData.append('file', event.target.files[0]);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile
            axios.post(
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

      <TextArea value={state.value.id} placeholder="ID" autoSize onChange={(e) => {
        e.preventDefault();

      }} />

      <br />
      <br />
      <TextArea defaultValue={state.value.name} placeholder="FullName" autoSize onChange={(e) => {
        e.preventDefault();

      }} />
      <br />

      <br />
      <TextArea defaultValue={state.value.email} placeholder="Email" autoSize onChange={(e) => { }} />
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
      <TextArea defaultValue={state.value.university} placeholder="University" autoSize onChange={(e) => {
        e.preventDefault();

      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.major} placeholder="Major" autoSize onChange={(e) => {
        e.preventDefault();

      }} />
      <br />
      <br />
      <Radio.Group defaultValue={state.value.gender === true ? 1 : 2} name="radiogroup"  >
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group defaultValue={state.value.graduated === true ? 1 : 2} name="radiogroup2"    >
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
      <br />
      <TextArea defaultValue={state.value.experiences} rows={4} placeholder="Description your experients" maxLength={400} />
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

          Update Tutor
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