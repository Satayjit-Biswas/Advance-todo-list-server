const express = require("express");
const app = express();
require('./config/dbConnection')
const port = process.env.PORT || 5000;

// app.use(express.json());

app.get(("/"),(req,res)=>{
    res.send("Welcome to todo server");
})

app.listen(port,()=>{
    console.log("Server is Running");
    console.log(`Example app listening at http://localhost:${port}`);
})