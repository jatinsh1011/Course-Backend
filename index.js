const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://jatinsj710:GXk18waSawtoI3Yj@cluster0.eqf8jxo.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});


const introSchema ={
   name1 : String,
   name2 : String,
   name3 : String,
   name4 : String,
   name5 : String,
}


const Name = mongoose.model("Name", introSchema);

const name1 = new Name({
  name1: "1. Introduction to Machine Learning",
  name2: "2. Concepts of Machine Learning",
  name3: "3. Application of Machine Learning",
  name4: "4. Neural Network and Deep Learning",
  name5: "5. Application of Deep Learning",
});


const app = express();
app.use(cors());

app.get("/getMainNames" , (req,res)=>{
    res.send(name1);
})


app.listen(5000,()=>{
   console.log("Server is running");
})
