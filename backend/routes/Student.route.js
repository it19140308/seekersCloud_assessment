const express= require('express');
const Student = require('../models/Student.model')
const Programe = require('../models/Programe.model')

const aluthrouter = express.Router();


//register Student

aluthrouter.route('/add').post((req,res)=>{
    
    const {Student_ID,name,address,contact,programe}=req.body;

    const newStudent =new Student({

        Student_ID:Student_ID,
        name:name,   
        address:address,
        contact:contact,
        programeID:programe

    });
    

    newStudent.save().then(async(result)=>{
       const isupdated = await Programe.updateOne({
            _id: programe
        },{
            $push : {students_id : result._id}
        })
        res.json("Student Registered!")
    }).catch((err)=>{
        console.log(err);
    })

})



//view
aluthrouter.route('/').get((req,res)=>{
    Student.find().then((Student)=>{
        res.json(Student)
    }).catch((err)=>{
        console.log(err)
    })
})

// search option (view by ID)
aluthrouter.get('/:id', (req, res) => {
    Student.findById(req.params.id)
      .then((Student) => {
        if (Student) {
          res.status(200).json(Student);
        } else {
          res.status(404).json({
            message: 'Student not found'
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Error fetching Student',
          error: error
        });
      });
  });


// update Student

aluthrouter.route("/update/:id").put(async(req,res)=>{
    let StudentID = req.params.id;
    const {Student_ID,name,address,contact}=req.body;

    const updateDevice ={
        Student_ID,
        name,
        address,
        contact
    }
    const update = await Student.findByIdAndUpdate(StudentID,updateDevice)
    .then(()=>{
        res.json("Student Updated!")
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error:err.massege})
    })

})

// delete Student

aluthrouter.route("/delete/:id").delete(async(req,res)=>{
    let StudentID =req.params.id;
    await Student.findByIdAndDelete(StudentID)
    .then(()=>{
        res.json("Device deleted")
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error:err.massege})
    })
    
})



module.exports = aluthrouter;