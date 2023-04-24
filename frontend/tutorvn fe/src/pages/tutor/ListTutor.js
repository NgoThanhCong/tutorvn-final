/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Modal, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import { useState } from 'react';

import { useNavigate } from "react-router-dom"
import axios from "axios";


const ListTutor = () => {

    const baseUrl = "http://localhost:8080/api/v1/tutor/getAll";

    const [tutorList, setTutorList] = React.useState([]);

    const getTutorList =() => {
        axios.get(baseUrl).then((response) => {
            setTutorList(response.data.data);
        });
    }

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setTutorList(response.data.data);
        });
    }, []);

    const onDeleteTutor = async () => {
        await   axios.get("http://localhost:8080/api/v1/tutor/softDelete/" + tutorList[index].id ).then
        ((response) => {
            setIndex(-1);
        getTutorList();
        setOpen(false);
           // setTutorList(response.data.data);
        });
    }

    // const onEditTutor = async () => {
    //     await   axios.get("http://localhost:8080/api/v1/tutor/update/" + tutorList[index].id ).then
    //     ((response) => {
    //         setIndex(-1);
    //     getTutorList();

    //     setOpen(false);
    //        // setTutorList(response.data.data);
    //     });
    // }

  const [open, setOpen] = useState(false);


  const showModalDelete = () => {
    
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

    const navigate = useNavigate();
    const navigateEditTutor = () => {
        navigate("/tutor/edit");
    } 
    //= 
    
    const columns = [
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
        // {
        //     title: 'Current Job',
        //     dataIndex: 'currentJob',
        //     key: 'currentJob',
        //     render: 'currentJob',
        // },
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



        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),

        {
            title: 'Action',
            key: 'action',
            render: (index, record) => (
                <Space size="middle">
                    <a onClick={navigateEditTutor}>Edit</a>
                    {/* navigate("/tutor/edit") */}
                    <a onClick={showModalDelete}>Delete</a>
                    <>
      <Modal
        title=""
        open={open}
        onOk={()=>onDeleteTutor()}
        onCancel={hideModal}
        okText="YES"
        okType="danger"
        cancelText="NO"
      >
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" 
                viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
<h2 class="text-xl font-bold py-4 ">Are you sure you want to delete this tutor?</h2>
             
      </Modal>
    </>
                </Space>
            ),
        },
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'Ngo Thanh Cong',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },

    // ];
    const [isAddTutor, setIsAddTutor] = useState(false);
    const [index, setIndex] = useState(-1);
    const showModal = () => {
        setIsAddTutor(true);
    };
    const handleOk = () => {
        setIsAddTutor(false);
    };
    const handleCancel = () => {
        setIsAddTutor(false);
    };

    return <body class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">List Tutor</h2>
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
                                <option>All000</option>
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

                            () => { navigate("/tutor/insert") }
                        }
                            type="button"
                            class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Add Tutor

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
                                    setIndex(rowIndex);
                                    //navigate("/tutor/detail")  // dieu huong
                                }, // click row
                            };
                        }} columns={columns} dataSource={tutorList} />
                        
                    </div>
                </div>
            </div>
        </div>
    </body>
};

export default ListTutor;