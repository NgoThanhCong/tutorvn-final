import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
    return (<>
        <div className='flex flex-auto h-screen'>
            <Sidebar />
            <div className='grow'>
                <Navbar />
                <div className='m-5'> <div className='dark:text-white'>Profile</div></div>
            </div>
        </div>
    </>)
};

export default Profile;