import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Location from './Location'
import Footer from './Footer'



export default function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Location/>
     <Footer/>
    </>
  )
}
