import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav class="navbar bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ABC Institute</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/' class="nav-link "  href="#" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/Student/' class="nav-link" href="#"> Students </Link>
        </li>
        <li class="nav-item">
          <Link to ='/programe/' class="nav-link"> Programes </Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}
