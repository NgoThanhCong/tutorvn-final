import React from 'react'
// import Toggle from './ThemeToggle'

const Navbar = () => {
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
          {/* <Toggle /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
