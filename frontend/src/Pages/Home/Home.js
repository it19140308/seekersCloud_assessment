import React from 'react'
import './Home.css'


import { Link } from "react-router-dom";



export default function Home() {
  return (
    
  
 <div className=''>
  <div  class="text-bg-dark p-3">
    <div class="title">ABC INSTITUTE</div>
    <div class="sub_title">All the details about programs and Students</div>
    <div class="btns">
    <Link to="/programe/">
    <button type="button" class="btn btn-outline-light btn-lg">Programs</button>
      </Link>
      <Link to="/Student/">
      <button type="button" class="btn btn-outline-secondary btn-lg">Students</button>
      </Link>
    </div>
  </div>
  </div>
      
     
    
  )
}