/* eslint-disable no-undef */
import { DatePicker, Divider, Radio, Select, Space, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { privateUserRoute } from "../../utils/privateRoute";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
//import { Select } from 'antd';


const InsertCustomer = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [items, setItems] = useState(['Hà Nội', 'Hải Phòng','Đà Nẵng','Hồ Chí Minh','Bình Dương']);

    const onChangeName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value);
        setName(value);
    };
    const handleChangeGender = (value) => {
        console.log(value);

    };
    const onChangePhone = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value);
        setPhone(value);
    };
    const onChangeAddress = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value);
        setAddress(value);
    };

   
    const handleChangeProvince = (value) => {
        console.log(`selected ${value}`);
        setProvince(value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const customerData = {
            name: name,
            address: address,
            phone: phone,
            province: province,
            district: district

        };


        console.log(customerData);
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post("http://localhost:8080/api/customer/insert", customerData)
            .then((response) => {
                console.log(response.status, response.data);
                navigate("/customer")
            });
    };

    return (<>
        <div className='flex flex-auto h-screen'>
            <Sidebar />
            <div className='grow bg-sky-700'>
                <Navbar />
                <div className='m-5'> <body class="antialiased font-sans bg-gray-200">
        <div class="bg-sky-700 container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Insert Customer</h2>
                </div>
            </div>
            <TextArea style={{ width: '30%', height: '5px', marginRight: "30px" }} placeholder="FullName" autoSize onChange={(e) => {setName(e.target.value) }} />
            {/* <Select
                labelInValue
                defaultValue={{
                    value: 'male',
                    label: 'Male',
                }}

                style={{
                    width: 120,
                }}
                onChange={handleChangeGender}
                options={[
                    {
                        value: 'female',
                        label: 'female',
                    },
                    {
                        value: 'male',
                        label: 'Male',
                    },
                ]}
            /> */}

            <br />
            <br />

            <TextArea style={{ width: '25%', height: '5px' }} placeholder="Number phone" autoSize maxLength={10} onChange={(e) => {
                e.preventDefault();
                setPhone(e.target.value)
            }} />
            <br />
            <br />
            <TextArea style={{ width: '50%', height: '5px' }} placeholder="Address" autoSize onChange={(e) => {setAddress(e.target.value) }} />
            <br />
            <br />
            <TextArea style={{ width: '50%', height: '5px' }} placeholder="District" autoSize onChange={(e) => {setDistrict(e.target.value) }} />
            <br />
            <br />
           

            <Select

                onChange={handleChangeProvince}

                style={{ width: 300 }}
                placeholder="Select province"
                dropdownRender={(menu) => (
                    <>
                        {menu}
                        <Divider style={{ margin: '8px 0' }} />
                        <Space style={{ padding: '0 8px 4px' }}>
                        </Space>
                    </>
                )}
                options={items.map((item) => ({ label: item, value: item }))}
            />
            <br />
            <br />
            <br />
            <br />
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

                    Insert Customer
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
</div>
            </div>
        </div>
    </>)
    
   
};

export default privateUserRoute(InsertCustomer);