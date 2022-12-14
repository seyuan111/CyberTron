import React from 'react'
import Cyber2 from '../assets/Cyber2.jpg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Cyber2} alt="/" />
            <div className="flex flex-col justify-center">
                <p className="text-blue-300 font-bold">Hacking Dashboard</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">CyberHacking program</h1>
                <p>Welcome to CyberTron. CyberTron is a site where you can practice your ethical hacking and take courses for beginning hacking. CyberTron can teach you various ways of hacking. You can learn all the skills and materials needed to become a hacker.</p>
                <button className="bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics