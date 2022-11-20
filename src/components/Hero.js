import React from 'react'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 text-blue-300">CyberTron lets you learn Cybersecurity</p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">Welcome to CyberTron</h1>
        <div>
          <p className="md:text-xl sm:text-xl text-xl font-bold">This is the cybersecurity website for hackers</p>
        </div>
        <p className="md:2xl text-xl font-bold text-gray-500">CyberTron will turn all beginning hackers to advanced hackers. We offer courses that are beginner friendly.</p>
      </div>
    </div>
  )
}

export default Hero