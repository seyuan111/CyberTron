import React from 'react'
import Cyber from '../assets/Cyber4.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={Cyber} />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            <p className="font-bold p-2 text-blue-300">CyberTron lets you learn Cybersecurity</p>
            <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">Welcome to CyberTron</h1>
            <div>
              <p className="md:text-xl sm:text-xl text-xl font-bold">This is the cybersecurity website for hackers</p>
            </div>
              <p className="md:2xl text-xl font-bold text-blue-300">CyberTron will turn all beginning hackers to advanced hackers. We offer courses that are beginner friendly.</p>
              <button className="bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    </div>
/*
    <div className="text-white w-full h-screen relative">
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="font-bold p-2 text-blue-300">CyberTron lets you learn Cybersecurity</p>
      <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">Welcome to CyberTron</h1>
      <div>
        <p className="md:text-xl sm:text-xl text-xl font-bold">This is the cybersecurity website for hackers</p>
      </div>
      <p className="md:2xl text-xl font-bold text-gray-500">CyberTron will turn all beginning hackers to advanced hackers. We offer courses that are beginner friendly.</p>
      <button className="bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
    </div>
  </div>
*/
  )
}

export default Hero