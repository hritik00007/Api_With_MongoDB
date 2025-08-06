const express = require('express');
const dbConn= require('./mongodb');

const app = express();
app.use(express.json());
app.post('/sendBook/:id/?page=500',async(req, res)=>{
    console.log("New Book creating");
    let data=await dbConn();
    let result=await data.insertOne(req.body.id);
    res.send(result);
})

app.listen(5000)