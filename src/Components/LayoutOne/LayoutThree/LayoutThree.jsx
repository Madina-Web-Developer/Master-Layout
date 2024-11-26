import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

const LayoutThree = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutThree