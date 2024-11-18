import React from 'react'

export default function About() {
  return (
    <>
      <div className='bg-mainColor py-56'>
        <div className="flex justify-center text-center">
          <div className='text-center flex flex-col items-center mt-12'>
            <div className=''>
              <h1 className='text-white text-[40.8px] uppercase font-bold mb-[-10px]'>about component</h1>
              <div className='mt-5 flex items-center justify-between px-24'>
                <div className='firstline w-[80px] h-[4px] bg-white'></div>
                <i class="fa-solid fa-star text-white relative"></i>
                <div className='secondtline w-[80px] h-[4px] bg-white'></div>
              </div> 
            </div>
            <div className='w-[78%] m-auto mt-3'>
                <div className='flex flex-wrap'>
                  <div className="md:w-1/2 w-full px-3">
                    <div className="inner2 text-start text-white">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full px-3 md:mt-0 mt-6">
                    <div className="inner2 text-start text-white">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
