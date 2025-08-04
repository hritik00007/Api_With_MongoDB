const dbConn = require('./mongodb')
const express = require('express')

const app = express();

app.use(express.json());

app.put('/updateBook', async (req, res) => {
    if (!req.body.bookName) {
        return res.status(400);
    }
    let data = await dbConn();
    let result = await data.updateOne(
        { bookName: req.body.bookName },
        { $set: req.body }
    );
    res.send(result);
});
app.put('/updateBook/:bookName', async (req, res) => {
    if (!req.body.bookName && req.body.bookID) {
        return res.status(400);
    } console.log("Updating book:", req.params.bookName);
    let data = await dbConn();
    let result = await data.updateOne(
        { bookName: req.params.bookName },
        { $set: req.body }
    );
    res.send(result);
});


app.listen(5000);