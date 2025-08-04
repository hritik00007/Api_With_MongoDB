const express = require('express');
const dbConn=require('./mongodb')

const app = express();

app.get('/getBooks',async (req,res)=>{
    let data=await dbConn();
    data= await data.findAll().toArray();
    console.log(data);
    res.send(data);
})

app.get('/getBook/:id?page=500&category="Fiction',async (req,res)=>{
    let data=await dbConn();
    data= await data.findOne({bookId:req.bookId}).toArray();
    console.log(data);
    res.send(data);
})

app.listen(5000)