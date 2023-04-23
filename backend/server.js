const express =require ('express');
const mongoose =require ('mongoose');
const  bodyParser=require('body-parser');
const cors=require('cors');
const dotenv =require('dotenv');
require("dotenv").config();

const app=express();

const PORT=process.env.PORT|| 8000;

app.use(cors());
app.use(bodyParser.json());

const URL =process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    useNewUrlParser:true,
    
});

const connection =mongoose.connection;
connection.once('open',()=>{
    console.log("MogoDb Connection Sucess");
});


const programe_router = require('./routes/Programe.route');
const Student_router = require('./routes/Student.route');

app.use("/programe",programe_router);
app.use("/Student",Student_router);




app.listen(PORT,()=>{
    console.log(`server is up running on ${PORT}`);
});