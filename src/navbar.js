import React from 'react'
import {paper} from 'react-bootstrap-icons';

function Navbar() {
  return (
<div>
    <nav class="nav-container">
            <ul class="nav-menu">
                <li>
                    <i class='paper'></i><a href="">Contact Us</a>
                </li> 
                <li>
                    <a href="">Read More</a>
                </li> 
            </ul>
    </nav>
    <hr></hr>
</div>
  )
}

export default Navbar
