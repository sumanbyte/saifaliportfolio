import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='header-div'>
        <header>
            <nav>
            
                <ul className="nav-links-1">
                    <li>
                        <Link to="/" className='active'>Home</Link>
                    </li>
                    <li className='ml-5'>
                        <Link to="/projects" >Projects</Link>
                    </li>
                </ul>
                <p className='username-saif'>Saif</p>
                <ul className="nav-links-2">
                    <li className='mr-5'>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    </div>
  )
}

export default Navbar