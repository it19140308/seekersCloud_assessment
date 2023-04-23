import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../../Component/Navbar/Navbar';

export default function CreateStudent() {

    const[Student_ID,setStudent_ID]= useState('');
    const[name,setName] = useState('');
    const[address,setAddress] = useState('');
    const[contact,setContact]=useState('');
    const[programs,setPrograms]=useState([]);
    const[programe,setProgram]=useState('');

    function sendData(e){
       e.preventDefault();
       
       const newDevice={
        Student_ID,
        name,
        address,
        contact,
        programe

      
        
       }

       axios.post('http://localhost:8000/Student/add', newDevice).then(()=>{
        alert("Student registered Successfully!")
       }).catch((err)=>{
        alert(err)
       })
    }

    

    function getData(){
        axios.get('http://localhost:8000/programe/').then((data)=>{
            
        setPrograms(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getData();
    
     
    }, [])

    useEffect(() => {
      
    console.log('selected programe',programe)
      
    }, [programe])
    

  return (
   
    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
      <Navbar/>
    <form className='formcontainer' onSubmit={sendData}>
    <div class="mb-3">
      <label for="Student" class="form-label">Student_ID</label>
      <input type="Student" class="form-control" id="StudentID" aria-describedby=""required onChange={(e)=>{
                    setStudent_ID(e.target.value);
                }}/>
     
    </div>
    <div class="mb-3">
      <label for="Name" class="form-label">Name</label>
      <input type="Name" class="form-control" id="Name"required onChange={(e)=>{
                    setName(e.target.value);
                }}/>
    </div>
    <div class="mb-3">
      <label for="Address" class="form-label">Address</label>
      <input type="Address" class="form-control" id="Address"required onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
    </div>
    <div class="mb-3">
      <label for="Contact" class="form-label">Contact</label>
      <input type="Contact" class="form-control" id="Contact"required onChange={(e)=>{
                    setContact(e.target.value);
                }}/>
    </div>
    <div class="mb-3">
    <select class="form-select" aria-label="Default select example" onChange={(e)=>setProgram(e.target.value)}>
    <option selected>Select Program</option>
   
                        {programs.map((Program,id)=>(
                            <option key={id} value={Program._id}> {Program.name}</option>
                        ))}
    </select>
    </div>
  
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  
  </div>
 
  )
}
