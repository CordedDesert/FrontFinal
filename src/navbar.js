import React from 'react'
import {paper} from 'react-bootstrap-icons';

function Navbar() {
  return (
<div>
    <nav class="nav-container">
            <ul class="nav-menu">
                <li>
                    <i class='paper'></i><a href="#contact">Contact Us</a>
                </li> 
                <li>
                    <a href="">Read More</a>
                </li> 
            </ul>
    </nav>
    <hr style={{ borderTop: '5px solid black' }} className='hrnav'></hr>
</div>
  )
}

export default Navbar
