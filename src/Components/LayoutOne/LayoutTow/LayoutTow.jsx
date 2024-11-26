import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../../Navbar2/Navbar2'
import Footer2 from '../../Footer2/Footer2'

const LayoutTow = () => {
  return (
    <>
    <Navbar2/>

    <div className="two flex justify-between items-center bg-blue-200 ">
        <div className="see w-[550px] bg-white">
            <ul className='l flex flex-col justify-center items-center'>
                <li className='ha text-9 font-Poppins font-medium text-black' >Game</li>
                <li className='ha text-9 font-Poppins font-medium text-black' >Boy</li>
                <li className='ha text-9 font-Poppins font-medium text-black' >Girl</li>
                <li className='ha text-9 font-Poppins font-medium text-black' >Game</li>
                <li className='ha text-9 font-Poppins font-medium text-black' >Boy</li>
                <li className='ha text-9 font-Poppins font-medium text-black' >Girl</li>
            </ul>
           
        </div>

        <div className="o">
            <Outlet/>
        </div>

         
    </div>
    
    <Footer2/>
    
    </>
  )
}

export default LayoutTow