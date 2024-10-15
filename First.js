const express=require('express');
const app=express();
const port=1500;

const cors=require('cors');
const { default: mongoose } = require('mongoose');
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect('mongodb://localhost:27017/Project')
.then(()=>{
    console.log("mongodb connected sucessfully")
})
.catch((err)=>{
    console.error("mongodb connection error",err);
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});