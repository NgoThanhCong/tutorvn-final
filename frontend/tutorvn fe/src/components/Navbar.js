import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Image, Space, Typography } from 'antd';
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';
// import Toggle from './ThemeToggle'

const Navbar = () => {

  const navigate = useNavigate();

 

  const items = [
    {
      key: '1',
      label: 'View Profile',
    },
    {
      key: '2',
      label: 'Change Password',
    },
    {
      key: '3',
      label: 'Logout',
    },
  ];
  return (
    <nav className='bg-orange-500 px-2 py-2.5  dark:bg-gray-800'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-light	 whitespace-nowrap text-white dark:text-white'>
          <marquee width="100%" direction="right" height="35px">
          <p class="italic"> “Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi</p>
         
      </marquee>
          </span>
        </div>

        <div className='flex justify-end pr-4'>

        <Dropdown
         
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >

<a onClick={(e) => {
      navigate("/update-password");
// Dropdown AntD https://ant.design/components/dropdown
}}>
    <Typography.Link>
<Avatar size="60" round={true} 
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            />

    </Typography.Link>
    </a>
  </Dropdown>
          {/* <Toggle /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
