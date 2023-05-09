import { Radio, DatePicker, Upload, Button, label, Card, Select, Space, Modal, Tag, Table, Checkbox, Row, Col, Input } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import Course from './Course';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { privateUserRoute } from '../../utils/privateRoute';



const DetailCourse = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const { Option } = Select;
  const handleChangeSubject = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeLevel = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearchLevel = (value) => {
    console.log('search:', value);
  };

  const onChangeTime = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearchTime = (value) => {
    console.log('search:', value);
  };
  

  // const columns = [
  //   {
  //     title: 'Mon',
  //     dataIndex: 'mon',
  //     key: 'mon',
  //   },
  //   {
  //     title: 'Tue',
  //     dataIndex: 'tue',
  //     key: 'tue',
  //   },
  //   {
  //     title: 'Wed',
  //     dataIndex: 'wed',
  //     key: 'wed',
  //   },
  //   {
  //     title: 'Thu',
  //     dataIndex: 'thu',
  //     key: 'thu',
  //   },
  //   {
  //     title: 'Fri',
  //     dataIndex: 'fri',
  //     key: 'fri',
  //   },
  //   {
  //     title: 'Sat',
  //     dataIndex: 'sat',
  //     key: 'sat',
  //   },
  //   {
  //     title: 'Sun',
  //     dataIndex: 'sun',
  //     key: 'sun',
  //   },
  // ];

  const navigateCourse = useNavigate();
  const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const columnsCourse = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Add </a>

        </Space>
      ),
    },
  ];
  const data = [
    {
      id:"1698",
      name: 'John Brown',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'New York No. 1 Lake Parkt',
      tags: ['nice', 'developer'],
    },
    {
      id:"1698",
      name: 'Jim Green',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id:"1698",
      name: 'Joe Black',
      gender: 'male',
      phoneNumber: '0968996589',
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const [open, setOpen] = useState(false);
  const dateFormat = 'YYYY/MM/DD';
  return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Detail Course</h2>
        </div>
      </div>
      <Card
        title="Information of customer"
        bordered={false}
      >
        <TextArea style={{width : '10%', height : '5px', marginRight: "10px"}} placeholder="ID" autoSize  />
        
        <TextArea style={{width : '30%', height : '5px', marginRight: "50px"}} placeholder="Full Name" autoSize  />
        <TextArea style={{width : '10%', height : '5px', marginRight: "50px"}} placeholder="Gender" autoSize  />
        <br/>
        <br/>
        <TextArea style={{width : '30%', height : '5px'}} placeholder="Phone" autoSize onChange={(e) => { }} />
        <br/>
        <br/>
        <TextArea style={{width : '50%', height : '5px'}} placeholder="Address" autoSize onChange={(e) => { }} />
        
        
      </Card>
      <br />
      <Card
        title="Requests for tutors"
        bordered={false}
      >
       <TextArea style={{width : '15%', height : '5px', marginRight: "10px"}} placeholder="Gender Requaiment" autoSize onChange={(e) => { }} />
        <TextArea style={{width : '30%', height : '5px', marginRight: "10px"}} placeholder="Academic level of tutor" autoSize onChange={(e) => { }} />
        <br />
        <br/>
        <TextArea style={{width : '70%', height : '150px'}} rows={4} placeholder="Description of the request" maxLength={500} />
        <br />
        
      </Card>

      <br />
      

      <Card
        title="Information of student"
        bordered={false}
      >
        <TextArea style={{width : '10%', height : '5px', marginRight: "30px"}} placeholder="Gender" autoSize onChange={(e) => { }} />
        <TextArea style={{width : '10%', height : '5px', marginRight: "10px" }} placeholder="Grade" autoSize onChange={(e) => { }} />
        <br/>
        <br/>
      <TextArea style={{width : '20%', height : '5px', marginRight: "30px"}} placeholder="Subject" autoSize onChange={(e) => { }} />  
      <TextArea style={{width : '20%', height : '5px'}} placeholder="Learning mode" autoSize onChange={(e) => { }} />
      <br/>
      <br/>
      <TextArea style={{width : '25%', height : '5px', marginRight: "30px"}} placeholder="Start day" autoSize onChange={(e) => { }} />
      <TextArea style={{width : '25%', height : '5px', marginRight: "30px", suffix: ".000 VND"}} placeholder="Learning time" autoSize onChange={(e) => { }} />
      <TextArea style={{width : '20%', height : '5px', marginRight: "20px", suffix: ".000 VND"}} placeholder="Fee" autoSize  onChange={(e) => { }} />
      <br/>
      <br/>
      <TextArea style={{width : '65%', height : '5px'}} placeholder="Address" autoSize onChange={(e) => { }} />       
        <br />
        <br />
        <TextArea style={{width : '70%', height : '150px'}} rows={4} placeholder="Describe the student's knowledge status and additional need knowledge" maxLength={500} />
        <br />
      </Card>
      <br/>
      <br/>
    </div>

  </body>


}

export default privateUserRoute(DetailCourse);