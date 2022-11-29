import React from 'react'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <h1 className="w-20 mx-auto mt-[-3rem] bg-white font-bold text-3xl">CyberTron</h1>
        <h2 className="text-xl font-bold text-center py-8">Regular Cyber</h2>
        <p className="text-center text-3xl font-bold">Free</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">Access to courses</p>
          <p className="py-2 border-b mx-8">Free problems you can try</p>
          <p className="py-2 border-b mx-8">No certification granted</p>
        </div>
        <button className="bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start CyberTron</button>
      </div>
      <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <h1 className="w-20 mx-auto mt-[-3rem] bg-white font-bold text-3xl">CyberTron+</h1>
      <h2 className="text-xl font-bold text-center py-8">Upgrade CyberTron</h2>
      <p className="text-center text-3xl font-bold">$20/Month</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">Access to the premium courses</p>
        <p className="py-2 border-b mx-8">Access to more problems and solutions</p>
        <p className="py-2 border-b mx-8">Certification Granted</p>
      </div>
      <button className="bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start CyberTron+</button>
    </div>
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    <h1 className="w-20 mx-auto mt-[-3rem] bg-white font-bold text-3xl">CyberTron Gold</h1>
    <h2 className="text-xl font-bold text-center py-8">Upgrade CyberTron</h2>
    <p className="text-center text-3xl font-bold">$40/Month</p>
    <div className="text-center font-medium">
      <p className="py-2 border-b mx-8 mt-8">Access to the premium courses and the live videos</p>
      <p className="py-2 border-b mx-8">Access to more problems and solutions</p>
      <p className="py-2 border-b mx-8">Certification Granted</p>
    </div>
    <button className="bg-yellow-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start CyberTron Gold</button>
  </div>
    </div>
    </div>
  )
}

export default Cards