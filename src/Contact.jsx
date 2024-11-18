import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='py-20'>
        <div className="flex flex-col items-center justify-center text-center">
          <div className='text-center mt-12'>
            <div className=''>
              <h1 className='text-darkBlue text-[40.8px] uppercase font-bold mb-[-10px]'>conatct section</h1>
              <div className='mt-5 flex items-center justify-between px-20'>
                <div className='firstline w-[80px] h-[4px] bg-darkBlue'></div>
                <i class="fa-solid fa-star text-darkBlue relative"></i>
                <div className='secondtline w-[80px] h-[4px] bg-darkBlue'></div>
              </div> 
            </div>                  
          </div>
          

          <div className='w-[80%] m-auto mt-20'>
            <form action="" className='flex flex-col w-full'>
              <div className="w-full">
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="userName"
                  />
                </div>
                <div className="w-full mt-12">
                  <input
                    type="number"
                    className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="userAge"
                  />
                </div>
                <div className="w-full mt-12">
                  <input
                    type="email"
                    className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="useEmail"
                  />
                </div>
                <div className="w-full mt-12">
                  <input
                    type="password"
                    className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="userPassword"
                  />
                </div>
                <div className='mt-3 flex'> <button className='bg-mainColor text-white py-2 px-5 rounded-md'>Send Message</button></div>
               
             
            </form>
              
          </div> 
        </div>
      </div>
    </>
  )
}

































































































