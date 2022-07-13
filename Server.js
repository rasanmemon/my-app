const {MongoClient} = require('mongodb');
const express = require("express");
const app = express();
const cors = require("cors");
const e = require('express');
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const uri = "mongodb+srv://cnq:123@cluster0.o58ea.mongodb.net/?retryWrites=true&w=majority"
global.client = new MongoClient(uri);

app.post("/start", async (req, res) => {
    let { message } = req.body
    try{
        await client.connect()
        console.log("MongoDB Server Connected Successfully!!")
    }
    catch(e){
        console.log(e)
    }
    console.log(message);
    res.send("All Connections Established!!")
})
app.get("/getQuestions", async (req, res) => {
    var ques
    try{
    
    ques = await client.db("task").collection("questions").find({}).toArray();
    console.log(ques)
    }
    catch(e){
        console.log(e)
    }
    if (ques != null){
        console.log("Questions Fetched")
        res.send(ques)
    }
    else{
        console.log("Question fetch failed")
        res.send("Failed")
    }
})
