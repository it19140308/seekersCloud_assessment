import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom"
import { Link, json, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from '../../Component/Navbar/Navbar';

export default function UpdateLocation() {

  const {_id}=useParams();
  const[data, setData] =useState([]);
  const navigate =useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8000/programe/${_id}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

  function handleSubmit(id){
    
    axios.put('http://localhost:8000/programe/update'+ id,data)
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
      <input type="programeID" class="form-control" id="programeID" aria-describedby=""required  onChange={e=>setData({...data,programe_ID:e.target.value})} />
     
    </div>
    <div class="mb-3">
      <label for="programeName" class="form-label">Name</label>
      <input type="name" class="form-control" id="programename"required onChange={e=>setData({...data,name:e.target.value})} />
    </div>
    <div class="mb-3">
      <label for="programeDuration" class="form-label">Duration</label>
      <input type="duration" class="form-control" id="programeDuration"required onChange={e=>setData({...data,duration:e.target.value})} />
    </div>
    <div class="mb-3">
      <label for="cost" class="form-label">Cost</label>
      <input type="duracosttion" class="form-control" id="cost"required onChange={e=>setData({...data,cost:e.target.value})} v/>
    </div>
  
    <button type="submit" class="btn btn-primary">Update Programe</button>
  </form>
  </div>
  </div>

  )
}
