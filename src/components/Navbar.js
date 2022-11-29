import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="text-white flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold">CyberTron</h1>
        <ul className="hidden md:flex">
            <li className="p-4 hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">About</li>
            <li className="p-4 hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Courses</li>
            <li className="p-4 hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Upgrade</li>
            <li className="p-4 hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold m-4">CyberTron</h1>
            <ul>
                <li className="p-4 border-b hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Home</li>
                <li className="p-4 border-b hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">About</li>
                <li className="p-4 border-b hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Courses</li>
                <li className="p-4 border-b hover:bg-gray-50 hover:text-black hover:rounded-md cursor-pointer">Upgrade</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar