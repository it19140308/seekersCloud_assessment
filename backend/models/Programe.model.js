const {mongoose} = require('mongoose');

const Schema =mongoose.Schema;

const ProgrameSchema= new Schema({
    programe_ID:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
   
    cost:{
        type:String,
        
       
    },
    students_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",}]

})

const programe = mongoose.model("programe",ProgrameSchema);

module.exports =programe;