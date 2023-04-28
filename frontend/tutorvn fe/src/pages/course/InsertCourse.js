import { Radio, DatePicker, Upload, Button, label, Card, Select, Space, Modal, Tag, Table, Checkbox, Row, Col, Input } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import Course from './Course';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';


const InsertCourse = () => {
  const navigate = useNavigate();
  const [grade, setGrade] = useState("");
  // const [timeInLesson, setTimeInLesson] = useState("");
  const [gender, setGender] = useState(true);
  const [genderRequire, setGenderRequire] = useState(true);
  const [learningMode, setLearningMode] = useState("");
  const [address, setAddress] = useState("");
  const [learningTime, setLearningTime]  = useState("");
  const [fee, setFee] = useState("");

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onChangeGenderRequire = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
      setGenderRequire(true);
    }
    else {
      setGenderRequire(false);
    }

  };

  const handleChangeLearningTime = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  const handleChangeLearningMode = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  

  const handleChangeFee = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  const handleChangeTimeInLesson = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };

  const handleChangeGrade = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  const onChangeGender = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 1) {
      setGender(true);
    }
    else {
      setGender(false);
    }

  };

  const [listTutor, setListTutor] = useState([]);
  const [listSubject, setListSubject] = useState([]);
  const [listSubjectString, setListSubjectString] = useState([]);

  const url_getsubject = "http://localhost:8080/api/v1/subject/getsubject";

  React.useEffect(() => {
    axios.get(url_getsubject).then((response) => {
      setListSubject(response.data.data);

      var indents = [];
      for (var i = 0; i < listSubject.length; i++) {
        indents.push({ value: listSubject[i].id, label: listSubject[i].name });
      }
      setListSubjectString(indents);

    });
  }, [listSubject]);

  const navigateCourse = useNavigate();
  const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

//   React.useEffect(() => {
//     axios.get(baseUrl).then((response) => {
//         console.log(response);
//         setCourseList(response.data.data);
//     });
// }, []);

const baseUrlTUtorList = "http://localhost:8080/api/v1/tutor/getAll";

const [tutorList, setTutorList] = React.useState([]);
React.useEffect(() => {
  axios.get(baseUrlTUtorList).then((response) => {
      setTutorList(response.data.data);
  });
}, []);
const getTutorList = () => {
    axios.get(baseUrlTUtorList).then((response) => {
        setTutorList(response.data.data);
    });
}
  const columnsCourse = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
  },
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
  },
  {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
  },
  {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
  },
  {
      title: 'Experiences',
      key: 'experiences',
      dataIndex: 'experiences',
  },
  {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
  },
  ];

  const data = [
    {
      id: "1698",
      name: 'John Brown',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'New York No. 1 Lake Parkt',
      tags: ['nice', 'developer'],
    },
    {
      id: "1698",
      name: 'Jim Green',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: "1698",
      name: 'Joe Black',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const handleChange = (value) => {
    console.log(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      grade: grade,
      // timeInLesson: timeInLesson ,
      // phoneNumber: phoneNumber,
      gender: true,
      learningMode: learningMode,
      genderRequire: true,
      fee: fee,
      // learningTime: learningTime,



    };
    console.log(courseData);


    console.log(courseData);
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post("http://localhost:8080/api/v1/order/insertorder", courseData)
      .then((response) => {
        console.log(response.status, response.data);

        navigate("/course")
      });
  };

  const [open, setOpen] = useState(false);
  const dateFormat = 'YYYY/MM/DD';
  return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Insert Course</h2>
        </div>
      </div>
      <Card
        title="Information of tutor"
        bordered={false}
      >
        <>
          <Button onClick={() => setOpen(true)}>
            + Assign Tutor to Course
          </Button>
          <Modal
            title="List Tutors"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <div class="container mx-auto px-4 sm:px-8">
              <div class="py-8">
                <div>
                  <h2 class="text-2xl font-semibold leading-tight">Users</h2>
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                  <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">

                    </div>
                    <div class="relative">
                      <select
                        class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                        <option>All</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                        <path
                          d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                      </svg>
                    </span>
                    <input placeholder="Search"
                      class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                  </div>
                  <div class="w-full flex justify-end space-x-2">   {/**/}
                    <button icon={<PlusOutlined />} onClick={

                      () => { navigateCourse("/course/insert") }
                    }
                      type="button"
                      class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium
                            uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
                            ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                      Assign Tutor
                    </button>
                  </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <Table onRow={(record, rowIndex) => {
                      return {
                        onClick: event => {
                          navigateCourse("/course/detail")  // dieu huong
                        }, // click row
                      };
                    }} columns={columnsCourse} dataSource={tutorList} />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      </Card>
      <br />
      <Card
        title="Requests for tutors"
        bordered={false}
      >
        <label>Gender Required</label>
        <br />
        <Radio.Group name="radiogroup2" defaultValue={3}>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
          <Radio value={3}>Random</Radio>
        </Radio.Group>
        <br />
        <br />
        <Select

          labelInValue
          defaultValue={{
            value: 'student',
            label: 'Student',
          }}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: 'teacher',
              label: 'teacher',
            },

          ]}
        />
        <br />
        <br />
        <TextArea style={{ width: '70%', height: '150px' }} rows={4} placeholder="Description of the request" maxLength={400} />
        <br />
      </Card>

      <br />

      <Card
        title="Information of student"
        bordered={false}
      >
        <Radio.Group name="radiogroup" title hello defaultValue={1} onChange={onChangeGender} >
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
        <br />
        <br />
        <Select
          mode="tags"
          style={{
            width: '100%',
          }}
          placeholder="Subjects"
          onChange={handleChange}
          options={listSubjectString}
        />

        <br />
        <br />
        <label>Learning mode</label>
        <br />
        

        <Checkbox.Group
          style={{
            width: '50%',
          }}
          onChange={onChangeCheckbox}
        >
          <Row>
            <Col >
              <Checkbox value="A">Online</Checkbox>
            </Col>
            <Col span={10}>
              <Checkbox value="B">Offline</Checkbox>
            </Col>


          </Row>
        </Checkbox.Group>
        <br />
        <br />
        <TextArea placeholder="Address" autoSize onChange={(e) => {
          e.preventDefault();
          setAddress(e.target.value)
        }} />
        <br />
        <label>Learning time</label>
        <br />
        <Select
    showSearch
    placeholder="Select time"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '1h',
        label: '11',
      },
      {
        value: '2h',
        label: '2h',
      },
      {
        value: '3h',
        label: '3h',
      },
    ]}
  />
        <br />
        <label>Start day</label>
        <br />
        <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} placeholder="Start Day" format={dateFormat} />
        <br />
        <label>Fee</label>
        <br />
        <Input style={{ width: 112 }} placeholder="fee" autoSize suffix=".000 VND" />

        <br />

        {/* <br /><Table dataSource={dataSource} columns={columns} />; */}
        <br />
        <TextArea style={{ width: '70%', height: '150px' }} rows={4} placeholder="Describe the student's knowledge status and additional need knowledge" maxLength={4} />
        <br />


      </Card>
      <br />
      <div class="w-full flex justify-start space-x-2">
        <button
          onClick=
          {
            handleSubmit
          }
          type="button"
          class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Insert Course
        </button>
      </div>
      <br />
      <br />
    </div>

  </body>


}

export default InsertCourse;