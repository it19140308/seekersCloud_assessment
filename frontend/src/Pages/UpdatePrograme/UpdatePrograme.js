import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom"
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from '../../Component/Navbar/Navbar';

export default function UpdateLocation(props) {
  const {_id}=useParams();
  const[data, setData] =useState([]);
  const navigate =useNavigate();
  const id = localStorage.getItem("ID")
  console.log(id);
  const[programe_ID, setprograme_ID] =useState([]);
  const[name, setname] =useState([]);
  const[duration, setduration] =useState([]);
  const[cost, setcost] =useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8000/programe/${id}`)
    .then(res=>{
     
      console.log(res.data.programe_ID)
      setprograme_ID(res.data.programe_ID)
      setname(res.data.name)
      setduration(res.data.duration)
      setcost(res.data.cost)
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
      programe_ID,
      name,
      duration,
      cost,
  }
    axios.put('http://localhost:8000/programe/update/'+ id,data)
    .then(res=>{
      alert("data Update Successfully!")
      navigate('/programe/');
    })
  }
  return (
    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
    <div className='formcontainer'>
    <Navbar/>
    <form >
    <div class="mb-3">
      <label for="programe" class="form-label">Programe_ID</label>
      <input type="programeID" class="form-control" id="programeID" value={programe_ID} aria-describedby=""  onChange={e=>setprograme_ID(e.target.value)} />
     
    </div>
    <div class="mb-3">
      <label for="programeName" class="form-label">Name</label>
      <input type="name" class="form-control" id="programename" value={name} onChange={e=>setname(e.target.value)} />
    </div>
    <div class="mb-3">
      <label for="programeDuration" class="form-label">Duration</label>
      <input type="duration" class="form-control" id="programeDuration"  value={duration}  onChange={e=>setduration(e.target.value)} />
    </div>
    <div class="mb-3">
      <label for="cost" class="form-label">Cost</label>
      <input type="duracosttion" class="form-control" value={cost} id="cost" onChange={e=>setcost(e.target.value)} v/>
    </div>
  
    <button type="submit" class="btn btn-primary" onClick={(e) => updateUser(e)}>Update Programe</button>
  </form>
  </div>
  </div>

  )
}
