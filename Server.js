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
const client = new MongoClient(uri);

async function createConnection(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Database Connection Established...')
    } catch (e) {
        console.error(e);
    }
}
createConnection().catch(console.error);
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
app.get("/users", async (req, res) => {
    var ques;
    console.log(req.params);
    const username= "user1";
    const password= "pass1";
    try{    
    ques = await client.db("task").collection("Users").findOne({Username:username,Password:password});
    console.log(ques)
    
    }
    catch(e){
        console.log(e)
    }
    if (ques != null){
        console.log("user Fetched")
        res.send(ques)
    }
    else{
        console.log("users fetch failed")
        res.send("Failed")
    }
     
})
