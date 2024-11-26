import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'

const Navbar2 = () => {
  return (
    <div>
        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="l">
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

export default Navbar2