// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// const url = "mongodb+srv://unekwuojoabah4:9294edebo@cluster0.t2qncee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// async function connect(){
//     try{
//         await mongoose.connect(url);
//         console.log("Connected to mongoDb");
//     } catch(error){
//         console.error(error)
//     }
// }

// connect();

//To view engine
// app.set("view engine", "ejs");

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false})); // middleware


// middleware are functions that simply help us to midfy or req and res oblect
// Middleware enables us to create several functions that can be used in our http request object(e.g get() and post())

const getWeather = (req, res, next)=>{
    req.visitorWeather = true;
    next()

}

const resWeather =(req, res, next)=>{
    req.rspondWeather = "Hiiii";
    next()

}

app.get("/", getWeather, resWeather, (req, res)=>{
    res.send(`

    <h2>Do you like programming? yes/no</h2>
    <form action="/request" method="POST">
    <input type="text" name="choice">
    <button>click to summit</button>
    </form>

    <p>${req.visitorWeather? "It is raining": 'its not raining'}</p>

    <p>${req.rspondWeather}</p>

    `);
});


app.post("/request", (req, res) =>{
    if(req.body.choice.trim().toUpperCase() === "NO"){
        res.send("You are not a good programmer");
    } else if(req.body.choice.trim().toUpperCase() === "YES"){
        res.send("Keep the spirit up! welcome to DEVs community")

    } else {
        res.send("You failed to follow the instructions, type either yes/no")
    }
   
});



app.get("/request", (req, res) => {
    res.send("Hiiiiiiiiiii  welcome to request page")
})

app.listen(8000, () => {
    console.log("Server started on port 8000")
})