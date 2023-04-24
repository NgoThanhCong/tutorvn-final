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


import InsertCustomer from './pages/customer/InsertCustomer'
import DetailCustomer from './pages/customer/DetailCustomer'
import EditCustomer from './pages/customer/EditCustomer'
import Customer from './pages/customer/Customer'








function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/test' element={<Test />} />
                    
                    <Route path='/tutor/insert' element={<InsertTutor />} />                   
                    <Route path='/tutor' element={<Tutor />} />  
                    <Route path='/tutor/edit' element={<EditTutor />} />
                    <Route path='/tutor/list' element={<ListTutor />} />
                    <Route path='/tutor/detail' element={<DetailTutor />} />

                    <Route path='/customer' element={<Customer/>} /> 
                    <Route path='/customer/insert' element={<InsertCustomer/>} /> 
                    <Route path='/customer/detail' element={<DetailCustomer/>} />
                    <Route path='/customer/edit' element={<EditCustomer/>} />

                    <Route path='/course/detail' element={<DetailCourse />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/course/insert' element={<InsertCourse />} />
                    <Route path='/course/edit' element={<EditCourse />} />
                

                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App