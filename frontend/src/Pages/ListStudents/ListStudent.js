import React,{useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../Component/Navbar/Navbar';

import { Link, json, useNavigate } from "react-router-dom";



export default function ListStudent() {

    const[data, setPrograms] =useState([]);
    const[records,setRecords]=useState([])

    const navigate =useNavigate();
  
    const[modeldata, setModeldata] =useState({
      
      Student_ID:"",
      name:"",
      address:"",
      contact:'',
      programe:''
      
    })
  
  
    useEffect(()=>{
        function getStudent(){
          axios.get("http://localhost:8000/Student").then((res)=>{
  
            setPrograms(res.data);
            setRecords(res.data);
  
          }).catch((err)=>{
            alert(err.massage)
          })
        }
        getStudent();
    },[])

    const Filter =(event)=>{
          setRecords(data.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    }
  
    const showDetail = (id) =>
    {
      
      fetch(`http://localhost:8000/Student/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setModeldata(res))
    }


  
  return (
    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
        <Navbar/>
        
        <form className="d-flex" role="search" onChange={Filter}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link to ='/Student/add'>
        <button type="button" class="btn btn-outline-primary btn-lg"> +Add New Student</button></Link>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Contact</th>
 
    </tr>
  </thead>
  <tbody>
  {records.map((names,id)=>
                           
                           <tr key={id} >

                              {console.log("kasun",names._id)}
                               
                              <td>{names.Student_ID}</td>
                              <td>{names.name}</td>
                              <td>{names.address}</td>
                              <td>{names.contact}</td>
                              <td>{names.programe}</td>
                              
                             <td>
                             
                              <Link className="btn btn-primary" to ={'/programe/update/id'}>Update</Link>
                              
                                <>    </>
                                <button className="btn btn-primary" onClick={(e)=>{
                                      handleSubmit(names._id);
                              }} >Delete</button>
                                <>    </>
                                
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