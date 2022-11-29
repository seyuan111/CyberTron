import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <h1 className="w-full text-3xl font-bold">CyberTron</h1>
        <p className="py-4">CyberTron has been a site to help student from all over the world learn Cyber Security.</p>
        <div className="flex justify-between md:w-[75%] my-6">
            <FaTwitter size={30}/>
            <FaInstagram size={30}/>
            <FaFacebook size={30}/>
            <FaYoutube size={30}/>
            <FaLinkedin size={30}/>
        </div>
    </div>
  )
}

export default Footer