import { Radio, DatePicker, Upload, Button, Image } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const InsertNotification = () => {
  const navigate = useNavigate();

  const dateFormat = 'YYYY/MM/DD';
 
//   "id":1,
//     "receivedID":2,
//     "senderID":1,
//     "title":"Nhận lớp mới ngày 15/05/2023",
//     "content":"Bạn nhận được yêu cầu lớp mới từ Phụ huynh Nguyễn Lan Anh , SĐT 03123213321, Tên học sinh: hà thảo nhi, lớp 5, trường TH Xuâ La, Xuân Đỉnh, Hà Nội",
//     "priority":1,
//     "type":1
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [receivedID, setReceivedID] = useState("");
  const [senderID, setSenderID] = useState("");
  const [university, setUniversity] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");
  const handleChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
    //  setGender(true);
    }
    else {
     // setGender(false);
    }

  };

  const onChangeGraduated = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
     // setGraduated(true);
    }
    else {
    //  setGraduated(false);
    }

  };

  const onChangeBirthDay = (date, dateString) => {
    console.log(date, dateString);
    var dateFix = new Date(dateString); 

   // setBirthday(dateFix);
  };

  const onChangeTitle = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setTitle(value);
   // setCurrentJob(value);
  };

  const onChangeName = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
   // setName(value);
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    //setEmail(value);
  };

  const onChangeContent = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setContent(value);
   // setExperiences(value);
  };

//   "id":1,
//     "receivedID":2,
//     "senderID":1,
//     "title":"Nhận lớp mới ngày 15/05/2023",
//     "content":"Bạn nhận được yêu cầu lớp mới từ Phụ huynh Nguyễn Lan Anh , SĐT 03123213321, Tên học sinh: hà thảo nhi, lớp 5, trường TH Xuâ La, Xuân Đỉnh, Hà Nội",
//     "priority":1,
//     "type":1
  const handleSubmit = (e) => {
    e.preventDefault();
    const notification = {
      title: title,
      content: content,
      receivedID: 2,
      senderID: 1,
      priority: 1 ,
      type: 1
    };

    console.log(notification);
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post("http://localhost:8080/api/notification/insert", notification)
      .then((response) => {
        console.log(response.status, response.data);
        navigate("/notification")
      });
  };



  return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Insert Notification</h2>
        </div>
      </div>
    

      <TextArea placeholder="Email" autoSize onChange={(e) => {
        e.preventDefault();
        //setEmail(e.target.value)
      }} />
      <br />
      <br />
    
      <Radio.Group name="radiogroup" defaultValue={1} onChange={onChange}   >
        <Radio value={1}>Personal</Radio>
        <Radio value={2}>All People</Radio>
      </Radio.Group>
      <br />
      <br />
     
    
      <TextArea rows={4} placeholder="Title" autoSize onChange={onChangeTitle} />
      <br />
      <br />

      <TextArea rows={4} placeholder="Description notification" maxLength={400} onChange={onChangeContent} />
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

          Save Notification
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

export default InsertNotification;
