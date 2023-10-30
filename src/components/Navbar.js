import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='header'>
    <ul>
          <Link className='icon' to="/hello" >Day1.1</Link>
          <Link className='icon' to="/About " >Day1.2</Link>
          {/* <Link  className='icon' to="/contact" >Day2.1</Link>
          <Link className='icon' to="/About " >Day2.2</Link>
          <Link  className='icon' to="/contact" >Day3.1</Link>
          <Link className='icon' to="/About " >Day3.2</Link>
          <br />
<br />
          
          <Link className='icon' to="/hello" >Day4.1</Link>
          <Link className='icon' to="/About " >Day4.2</Link>
          <Link  className='icon' to="/contact" >Day5.1</Link>
          <Link className='icon' to="/About " >Day5.2</Link>
          <Link  className='icon' to="/contact" >Day6.1</Link>
          <Link className='icon' to="/About " >Day6.2</Link>
<br />
          
          <Link className='icon' to="/hello" >Day1.1</Link>
          <Link className='icon' to="/About " >Day1.2</Link>
          <Link  className='icon' to="/contact" >Day2.1</Link>
          <Link className='icon' to="/About " >Day2.2</Link>
          <Link  className='icon' to="/contact" >Day3.1</Link>
          <Link className='icon' to="/About " >Day3.2</Link>
          

          

 */}

          
    </ul>
        
    </div>
  )
}

export default NavBar