/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Modal, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { privateUserRoute } from "../../utils/privateRoute";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";



const Course = () => {

    const baseUrl = "http://localhost:8080/api/course";

    const [courseList, setCourseList] = React.useState([]);

    const getCourseList = () => {
        axios.get(baseUrl).then((response) => {
            
            setCourseList(response.data.data);
        });
    }
    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            console.log(response);
            setCourseList(response.data.data);
        });
    }, []);


    const navigate = useNavigate();
    // const navigateEditCourse = () => {
    //     navigateEditCourse("/course/edit");
    // } 
    const navigateAddtutor = () => {
        navigateAddtutor("/tutor");
    } 
    const navigateEditCourse = useNavigate();
    const navigateCourse = useNavigate();


    const columns = [
        {
            title: 'ID'  ,
            dataIndex: 'id',
            key: 'id',
          
        },
      
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: 'PhoneNumber',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'learningMode',
            dataIndex: 'learningMode',
            key: 'learningMode',
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
        },
        // {
        //     title: 'Status',
        //     key: 'status',
        //     dataIndex: 'status',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag ? 'geekblue' : 'green';
        //                 if (tag === 'Active')
        //                 {
        //                     color = 'green';
        //                 }
        //                 if (tag === 'Find a tutor')
        //                 {
        //                     color = 'red';
        //                 }

        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (index, record) => (
                <Space size="middle">
                    <a >Edit</a>
                    

                    <a >Delete</a>
                    <>
                        
                    </>
                </Space>
            ),
        },
    ];
    const columnsCourse = [

        {
            title: 'Subject'  ,
            dataIndex: 'subject',
            key: 'subject',
            render: (text) => <a>{text}</a>,
        },
      
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
        },
        {

            //phoneNumber
            title: 'PhoneNumber',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Date created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
        },
        {
            title: 'Learning mode',
            dataIndex: 'learningMode',
            key: 'learningMode',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag ? 'geekblue' : 'green';
                        if (tag === 'Active')
                        {
                            color = 'green';
                        }
                        if (tag === 'Find a tutor')
                        {
                            color = 'red';
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
                <Space >
                    <a onClick={navigateAddtutor} >Add Tutor</a>                  
                    <a onClick= {navigateEditCourse("/course/edit")}>Edit </a>
                    <a>Delete</a>
                    
                </Space>
            ),
        },
    ];
    const data = [
        {
            subject: 'English',
            grade: '6',
            address: 'so 25 ngo 234 my dinh 1 nam tu liem ha noi',
            dateCreated: '26/08/2023',
            tags: ['Active'],
            learningMode: 'Online, Offline',
        },
        {
            subject: 'History',
            grade: '8',
            address: '20 ngõ 92/43 Nguyen Khanh Toan, Quan Hoa, Ha Noi',
            dateCreated: '26/08/2023',
            tags: ['Find a tutor'],
            learningMode: 'Online',
        },
        {
            subject: 'English',
            grade: '4',
            address: 'so 25 ngo 234 my dinh 1 nam tu liem ha noi',
            dateCreated: '26/08/2023',
            tags: ['Finished'],
            learningMode: 'Offline',
        },
    ];
   

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
            <h2 class="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative">
                    <select
                        class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                    </select>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
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
                <button icon={<PlusOutlined />} onClick= { 
                    
                    () => {navigateCourse("/course/insert")}
                }
                    type="button"
                    class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium
                     uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
                    ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Add Course
                    
                </button>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table pagination={{
                    // pageSizeOptions: ["5", "10", "15", "15"],
                    pageSize: 30,
                    // showSizeChanger: true,
                    defaultPageSize: 30
                }} onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            console.log("row click" + rowIndex);
                            // setIndex(rowIndex);
                            // navigateEditTutor(rowIndex)

                            //navigate("/tutor/detail")  // dieu huong
                        }, // click row
                    };
                }} columns={columns} dataSource={courseList} />

            </div>
        </div>
    </div>
</div>

</body></div>
                </div>
            </div>
        </>
    )
   
};

export default privateUserRoute(Course);