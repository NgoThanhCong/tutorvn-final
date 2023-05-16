/* eslint-disable no-useless-concat */
/* eslint-disable react/jsx-no-undef */
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Test from './pages/Test';

import Tutor from './pages/tutor/Tutor'
import InsertTutor from './pages/tutor/InsertTutor';

import EditTutor from './pages/tutor/EditTutor'
import ListTutor from './pages/tutor/ListTutor'
import DetailTutor from './pages/tutor/DetailTutor'

import Course from './pages/course/Course'
import InsertCourse from './pages/course/InsertCourse';
import DetailCourse from './pages/course/DetailCourse'
import EditCourse from './pages/course/EditCourse'
import React from 'react';
import InsertCustomer from './pages/customer/InsertCustomer'
import DetailCustomer from './pages/customer/DetailCustomer'
import EditCustomer from './pages/customer/EditCustomer'
import Customer from './pages/customer/Customer'
import Notification from './pages/notification/Notification'
import InsertNotification from './pages/notification/InsertNotification'
import './index.css';
import ChangePassword from './pages/ChangePassword'
import HomePage from './pages/HomePage'
import { API_ADMIN } from './components/RouteURL'

//https://flaviocopes.com/axios-send-authorization-header/
function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path= {API_ADMIN + '/'} element={<Tutor />} />  
                    <Route path='/admin/profile' element={<Profile />} />
                    <Route path='/admin/update-password' element={<ChangePassword />} />
                    <Route path='/admin/login' element={<Login />} />
                    <Route path='/admin/test' element={<Test />} />
                    <Route path='/home-page' element={<HomePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path= {API_ADMIN + '/'} element={<Tutor />} />  

                    <Route path='/admin/tutor/insert' element={(<InsertTutor/>) } />                   
                    <Route path='/admin/tutor' element={<Tutor />} />  
                    <Route path='/admin/tutor/edit' element={<EditTutor />} />
                    <Route path='/admin/tutor/list' element={<ListTutor />} />
                    <Route path='/admin/tutor/detail' element={<DetailTutor />} />
                    <Route path='/admin/customer' element={<Customer/>} /> 
                    <Route path='/admin/customer/insert' element={<InsertCustomer/>} /> 
                    <Route path='/admin/customer/detail' element={<DetailCustomer/>} />
                    <Route path='/admin/customer/edit' element={<EditCustomer/>} />
                    <Route path='/course/detail' element={<DetailCourse />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/course/insert' element={<InsertCourse />} />
                    <Route path='/admin/course/edit' element={<EditCourse />} />
                    <Route path='/admin/notification' element={<Notification />} />  
                    <Route path='/admin/notification/insert' element={<InsertNotification />} />  
                    <Route path='/admin/notification/edit' element={<InsertNotification />} />  
                </Routes>
        </BrowserRouter>
    )
}

export default App