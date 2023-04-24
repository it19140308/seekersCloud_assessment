import React,{useEffect, useState} from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function UpdateStudent() {
    const[programe,setPrograms]=useState([]);
    const {_id}=useParams();
   
    const navigate =useNavigate();
    const id = localStorage.getItem("ID")
    console.log(id);
    const[Student_ID, setStudent_ID] =useState([]);
    const[name, setname] =useState([]);
    const[address, setaddress] =useState([]);
    const[contact, setContact] =useState([]);
    const[programs, Setprograms] =useState([]);
   
  
    useEffect(()=>{
      axios.get(`http://localhost:8000/Student/${id}`)
      .then(res=>{
       
        console.log(res.data.Student_ID)
        setStudent_ID(res.data.Student_ID)
        setname(res.data.name)
        setaddress(res.data.address)
        setContact(res.data.contact)
        setPrograms(res.data.programe)
      }
        
      )
      .catch(err=>console.log(err))
    },[])
  
    const updateUser = (e) => {
      e.preventDefault();
      handleSubmit(e)
  };
  
  
  
    function handleSubmit(){
      const data = {
        Student_ID,
        name,
        address,
        contact,
        programe
    }
      axios.put('http://localhost:8000/Student/update/'+ id,data)
      .then(res=>{
        alert("data Update Successfully!")
        navigate('/programe/');
      })
    }
    
  return (
    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
      <Navbar/>
    <form className='formcontainer' >
    <div class="mb-3">
      <label for="Student" class="form-label">Student_ID</label>
      <input type="Student" class="form-control" id="StudentID" aria-describedby=""required />
     
    </div>
    <div class="mb-3">
      <label for="Name" class="form-label">Name</label>
      <input type="Name" class="form-control" id="Name"required onChange={e=>setStudent_ID(e.target.value)}/>
    </div>
    <div class="mb-3">
      <label for="Address" class="form-label">Address</label>
      <input type="Address" class="form-control" id="Address"required onChange={e=>setname(e.target.value)}/>
    </div>
    <div class="mb-3">
      <label for="Contact" class="form-label">Contact</label>
      <input type="Contact" class="form-control" id="Contact"required onChange={e=>setaddress(e.target.value)}/>
    </div>
    <div class="mb-3">
    <select class="form-select" aria-label="Default select example" onChange={(e)=>setPrograms(e.target.value)}>
    <option selected>Select Program</option>
   
                        {programs.map((Program,id)=>(
                            <option key={id} value={Program._id}> {Program.name}</option>
                        ))}
    </select>
    </div>
  
    <button type="submit" class="btn btn-primary"onClick={(e) => updateUser(e)}>update</button>
  </form>
  
  </div>
  )
}
