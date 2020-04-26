const express = require('express');
const app =express();

const customerSignUp = require('../routes/signUplogin');
app.use("/",customerSignUp);


app.listen(5000,()=>{
    console.log("server is listening 5000 ....")

});
