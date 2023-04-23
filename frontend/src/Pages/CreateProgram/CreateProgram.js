import React from 'react'
import './Createprograme.css'
import axios from 'axios'
import  {useState} from 'react'
import Navbar from '../../Component/Navbar/Navbar'

export default function CreateProgram() {


    const [programe_ID,setPrograme_ID]=useState('');
    const [name,setName]=useState('');
    const[duration,setDuration]=useState('');
    const[cost,setCost]=useState('');

    function sendData(e){
        e.preventDefault();
        
        const newProgram ={
            programe_ID,
            name,
            duration,
            cost
        }
        axios.post('http://localhost:8000/programe/add',newProgram).then(()=>{
            alert("program added Successfully!")
        }).catch((err)=>{
            alert(err)
        })
    }

  return ( 
   <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
    <Navbar/>
   <div className='formbox'>
    
    <form className='formcontainer' onSubmit={sendData}>
    <div class="mb-3">
      <label for="programe" class="form-label">Programe_ID</label>
      <input type="programeID" class="form-control" id="programeID" aria-describedby=""required onChange={(e)=>{
                    setPrograme_ID(e.target.value);
                }}/>
     
    </div>
    <div class="mb-3">
      <label for="programeName" class="form-label">Name</label>
      <input type="name" class="form-control" id="programename"required onChange={(e)=>{
                    setName(e.target.value);
                }}/>
    </div>
    <div class="mb-3">
      <label for="programeDuration" class="form-label">Duration</label>
      <input type="duration" class="form-control" id="programeDuration"required onChange={(e)=>{
                    setDuration(e.target.value);
                }}/>
    </div>
    <div class="mb-3">
      <label for="cost" class="form-label">Cost</label>
      <input type="duracosttion" class="form-control" id="cost"required onChange={(e)=>{
                    setCost(e.target.value);
                }}/>
    </div>
  
    <button type="submit" class="btn btn-primary">Create Programe</button>
  </form>
  </div>
  </div>

 
  )
}
