const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require('./model/User')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://loginauthentication:iamdeveloper@cluster0.hxtpa1u.mongodb.net/?retryWrites=true&w=majority")

app.post('/login',(req,res)=>{
    const {email,password} =req.body;
    Usermodel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("yhe password is incorrect")
            }
        }else{
            res.json("No record exist")
        }
    })

})

app.post('/signup',(req,res)=>{
    Usermodel.create(req.body)
    .then(user =>res.json(user))
    .catch(err =>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running");
})