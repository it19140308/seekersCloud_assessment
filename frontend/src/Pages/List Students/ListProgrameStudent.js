import React ,{useState,useEffect }from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import { Link, json, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function ListProgrameStudent() {
    const details = JSON.parse(localStorage.getItem('Studentdetail'))
    console.log("Studentdetail : ",details.students_id)
    const Students= details.students_id;
    const navigate =useNavigate();

    

  

  return (
    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
        <Navbar/>
        <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
  {Students.map((names,id)=>
                           
                           <tr key={id} >

                             
                               
                              <td>{names.Student_ID}</td>
                              <td>{names.name}</td>
                              <td>{names.address}</td>
                              <td>{names.contact}</td>

                              <td>
                             
                                <>    </>
                                <button class="btn btn-primary" onClick={(e)=>{
                                      handleSubmit(names._id);
                              }} >Delete</button>
                              </td>
                              
                            
                              
                           </tr>
                           )}
  </tbody>
</table>
</div>
  )

  function handleSubmit(id){
    const conf =window.confirm("Do you want to delete");

    if(conf){
      axios.delete('http://localhost:8000/Student/delete/'+id)
      .then(res=>{
        alert('Student has deleted!');
        navigate('/Student/')
        
      }).catch(err=>console.log(err))
    }
  }
}
