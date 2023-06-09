import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { privateUserRoute } from '../utils/privateRoute'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen bg-orange-400'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default privateUserRoute(Layout);
