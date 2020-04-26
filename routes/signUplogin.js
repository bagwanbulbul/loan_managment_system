const express = require('express');
var custmoer = express.Router();
custmoer.use(express.json())
const add = require("../model/signUploginDb");
const jwt = require('jsonwebtoken')

custmoer.post("/signUp",function(req,res){
    let customerDetails={userName:req.body.userName,
        emailId:req.body.emailId,
        password:req.body.password
    }
    let response = add.customerData(customerDetails)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({"staus":"wrong entry","massage":"your email is already exists pleas use another"})
    })
})

custmoer.get("/login",function(req,res){
    let emailId=req.body.emailId
    let password=req.body.password
    let response=add.customerlogin(emailId)
    response.then((data)=>{
        if(data.length==0){
            res.send("your email is incorect please try again...")
        }
        else if(data[0]["password"]==password){
            let token = jwt.sign({"user":data[0]},"secret_key")
            res.cookie(token)
            jwt.verify(token,"secret_key",(err,result)=>{
                res.json({"status":"write","massage":"login successful ","token":result})
            })   
        }
        else{
            res.send("your password is incorect try again....")
        }
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = custmoer