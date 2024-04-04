import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <ul style={{display: "flex", alignItems: "center", justifyContent:"center", padding: "50px 0"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/support">Support</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar