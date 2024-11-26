import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="container">
                <div className="main_row">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div>
                        <ul>
                            <li><Link to={"/"} >Home</Link></li>
                            <li><Link to={"/about"} >About</Link></li>
                            <li><Link to={"/contact"} >Contact</Link></li>
                            <li><Link to={"/LayoutTwo"} >Products</Link></li>
                            <li><Link to={"/LayoutThree"} >Buy</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar