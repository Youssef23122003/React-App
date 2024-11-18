import React from 'react'
import photo from './assets/avataaars.svg'

export default function Home() {
  return (
   <>
      <div className='bg-mainColor pb-32'>
          <div className="flex justify-center text-center">
            <div className='text-center flex flex-col items-center mt-40'>
              <img src={photo} className='w-3/4' alt="" />
              <div className='mt-12'>
                <h1 className='text-white text-4xl uppercase font-bold'>start Framework</h1>
                <div className='mt-3 flex items-center justify-between px-16'>
                  <div className='firstline w-[80px] h-[4px] bg-white'></div>
                  <i class="fa-solid fa-star text-white relative"></i>
                  <div className='secondtline w-[80px] h-[4px] bg-white'></div>
                </div>
                <h3 className='mt-5 text-white'>Graphic Artist - Web Designer - Illustrator</h3>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
