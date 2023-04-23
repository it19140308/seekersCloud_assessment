const express= require('express');
const programe = require('../models/Programe.model')

const router = express.Router();


// create programe

router.route('/add').post((req,res)=>{

    const programe_ID =req.body.programe_ID;
    const name= req.body.name;
    const duration =req.body.duration;
    const cost =req.body.cost;

    const newPrograme =new programe({
        programe_ID,
        name,      
        duration,
        cost

    })

    newPrograme.save().then(()=>{
        res.json("programe Added!")
    }).catch((err)=>{
        console.log(err);
    })

})
// view programe with pAGINATION OPTION
router.get('/', async (req, res) => {
   
      const limit = req.query.limit ? parseInt(req.query.limit) : 10;
      const skip = req.query.skip ? parseInt(req.query.skip) : 0;
      const sort = req.query.sort ? req.query.sort : 'name';
      const query = req.query.q ? { _id: req.query.q } : {};
      programe.find(query).limit(limit).skip(skip).sort(sort).populate("students_id"," Student_ID name address contact").then((programes)=>{
        res.json(programes)
    }).catch((err)=>{
        console.log(err)
    })
    })
    


/*
// view

router.route('/').get((req,res)=>{
    programe.find().populate("students_id"," Student_ID name address contact").then((programes)=>{
        res.json(programes)
    }).catch((err)=>{
        console.log(err)
    })
})
//view by id
/*
router.route('/get/:id').get((req,res)=>{
    programe.findOne().populate("students_id"," Student_ID name address contact").then((programes)=>{
        res.json(programes)
    }).catch((err)=>{
        console.log(err)
    })


})
*/

// search option (view by ID)
router.get('/:id', (req, res) => {
    programe.findById(req.params.id)
      .then((programe) => {
        if (programe) {
          res.status(200).json(programe);
        } else {
          res.status(404).json({
            message: 'programe not found'
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Error fetching programe',
          error: error
        });
      });
  });

  

// update programe

router.route("/update/:id").put(async(req,res)=>{
    let programeID = req.params.id;
    const {programe_ID,name,duration,cost}=req.body;

    const updatePrograme ={
        programe_ID,
        name,
        duration,
        cost
    }
    const update = await programe.findByIdAndUpdate(programeID,updatePrograme)
    .then(()=>{
        res.json("programe Updated!")
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating programe!", error:err.massege})
    })

})

// delete programe

router.route("/delete/:id").delete(async(req,res)=>{
    let programe_ID =req.params.id;
    await programe.findByIdAndDelete(programe_ID)
    .then(()=>{
        res.json("programe deleted")
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting programe", error:err.massege})
    })
    
})


module.exports= router;

