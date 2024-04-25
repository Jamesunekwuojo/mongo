const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://unekwuojoabah4:9294edebo@cluster0.t2qncee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connected to mongoDb");
    } catch(error){
        console.error(error)
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 800")
})