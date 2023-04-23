const {mongoose} = require('mongoose');

const Schema =mongoose.Schema;

const StudentSchema= new Schema({
    Student_ID:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
   
    contact:{
        type:Number,
        required:true
        
    }

})

const Student = mongoose.model("Student",StudentSchema);

module.exports =Student;