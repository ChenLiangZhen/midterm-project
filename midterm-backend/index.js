require("./src/models/User")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes")
const userAuth = require("./src/middleware/userAuth")

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(userRoutes)


const testUri = 'mongodb://client:testdatabase@localhost:30123/?authSource=admin'
mongoose.connect(testUri)
   .then(() => { console.log("successfully connected modified!!") }, rej => {console.log("failed to connect: " + rej)})

app.get("/api", userAuth, (req, res)=>{
  res.send(`your email is: ${req.user.email}`)
})

const PORT= 3000;
app.listen(PORT, ()=>{
  console.log(`App is running on port ${PORT}`)
})
