import { Radio, DatePicker, Upload, Button, label, Card, Select, Space, Modal, Tag, Table, Checkbox, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import Course from './Course';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { privateUserRoute } from '../../utils/privateRoute';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';



const EditCourse = () => {
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
  return (

    <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'> <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Insert Course</h2>
        </div>
      </div>
      <Card
        title="Information of customer"
        bordered={false}
      >
        <label>ID</label>
      <TextArea  placeholder="ID" autoSize   />
      <label>Name</label>
      <TextArea placeholder="Name" autoSize  />
      <label>Gender</label>
      <TextArea placeholder="gender" autoSize  />
      <label>Address</label>
       <TextArea placeholder="address" autoSize  />
        <>
          <Button onClick={() => setOpen(true)}>
            Edit Customer
          </Button>
          <Modal
            title="List Customer"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={900}
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
                      Add New Customer
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
                    }} columns={columnsCourse} dataSource={data} />       
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
          showSearch
          placeholder="Select academic level of tutor"
          optionFilterProp="children"
          onChange={onChangeLevel}
          onSearch={onSearchLevel}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'Student',
              label: 'Student ',
            },
            {
              value: 'Teacher',
              label: 'Teacher ',
            },
          ]}
        />
        <br />
        <br />
        <TextArea rows={4} placeholder="Description of the request" maxLength={4} />
        <br />
      </Card>

      <br />

      <Card
        title="Information of student"
        bordered={false}
      >
        <Radio.Group name="radiogroup" title hello defaultValue={1} >
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
        <br />
        <br />
        <Select
          mode="multiple"
          style={{
            width: '30%',
          }}
          placeholder="select subject"

          onChange={handleChangeSubject}
          optionLabelProp="label"
        >
          <Option value="math" label="Math">
            <Space>
              Math
            </Space>
          </Option>
          <Option value="literaturesa" label="Literature">
            <Space>
              Literature
            </Space>
          </Option>
          <Option value="english" label="English">
            <Space>
              English
            </Space>
          </Option>

        </Select>
        <br />
        <br />
        <Select
          showSearch
          placeholder="Select a grade"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'grade 1',
              label: 'Grade 1',
            },
            {
              value: 'grade 2',
              label: 'Grade 2',
            },
            {
              value: 'grade 3',
              label: 'Grade 3',
            },
            {
              value: 'grade 4',
              label: 'Grade 4',
            },
            {
              value: 'grade 5',
              label: 'Grade 5',
            },
            {
              value: 'grade 6',
              label: 'Grade 6',
            },
            {
              value: 'grade 7',
              label: 'Grade 7',
            },
            {
              value: 'grade 8',
              label: 'Grade 8',
            },
            {
              value: 'grade 9',
              label: 'Grade 9',
            },
            {
              value: 'grade 10',
              label: 'Grade 10',
            },
            {
              value: 'grade 11',
              label: 'Grade 11',
            },
            {
              value: 'grade 12',
              label: 'Grade 12',
            },

          ]}
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
        <TextArea placeholder="Address" autoSize onChange={(e) => { }} />
        <br />
        <label>Learning mode</label>
        <br />
        <Select
          showSearch
          placeholder="Select Leaning time"
          optionFilterProp="children"
          onChange={onChangeTime}
          onSearch={onSearchTime}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: '30 minute',
              label: '30 minute ',
            },
            {
              value: '1 hour',
              label: '1 hour ',
            },
            {
              value: '1 hour 30 minute',
              label: '1 hour 30 minute ',
            },
            {
              value: '2 hour',
              label: '2 hour ',
            },
            {
              value: '2 hour 30 minute',
              label: '2 hour 30 minute ',
            },
            {
              value: '3 hour',
              label: '3 hour ',
            },
          ]}
        />
        <br />
        <label>Start day</label>
        <br />
        <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)}placeholder="Start Day" format={dateFormat} />
        <br/>
        <label>Fee</label>
        <br/>
        <TextArea style={{width:80}} placeholder="fee" autoSize/> VND
        <br/>
        
        {/* <br /><Table dataSource={dataSource} columns={columns} />; */}
        <br />
        <TextArea rows={4} placeholder="Describe the student's knowledge status and additional need knowledge" maxLength={4} />
        <br />


      </Card>
      <br />
      <div class="w-full flex justify-start space-x-2">
        <button
          type="button"
          class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Insert Course
        </button>
      </div>
      <br />
      <br />
    </div>

  </body></div>
                </div>
            </div>
        </>
  )
 


}

export default privateUserRoute(EditCourse);