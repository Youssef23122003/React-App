import React from 'react'

export default function Location() {
  return (
     <>
          <div className='bg-darkBlue py-24'>
          <div className="w-[90%] m-auto">
            <div className="flex flex-wrap">
                <div className='md:w-1/3 w-full'>
                    <div className="inner text-center text-white">
                      <h3 className='text-3xl font-semibold'>LOCATION</h3>
                      <p className='mt-2'>2215 John Daniel Drive</p>
                      <p className='mt-3'>Clark, MO 65243</p>
                    </div>
                </div>
                <div className='md:w-1/3 w-full mt-20 md:mt-0'>
                    <div className="inner text-center flex flex-col justify-center items-center text-white">
                      <h3 className='text-3xl font-semibold'>AROUND THE WEB</h3>
                      <div className='flex gap-2 mt-3'>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white'>
                          <i class="fa-brands fa-facebook text-white"></i>
                        </div>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white'>
                        <i class="fa-brands fa-x-twitter text-white"></i>
                        </div>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white'>
                        <i class="fa-brands fa-linkedin text-white"></i>
                        </div>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white'>
                        <i class="fa-solid fa-globe text-white"></i>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-full mt-20 md:mt-0'>
                    <div className="inner text-center text-white">
                      <h3 className='text-3xl font-semibold'>ABOUT FREELANCER</h3>
                      <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}
