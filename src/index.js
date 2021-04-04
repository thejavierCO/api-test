const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/",(req,res,next)=>{
    res.json({});
})

app.listen(8080,()=>console.log("run"));