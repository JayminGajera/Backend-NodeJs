
const express = require('express'); //require use to import
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000; //here port number fetching from env but in case error default 4000.

//middleware to parse json reques body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,() => {
    console.log(`server started successfully at ${PORT}`);
})

//connect the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res) => {
    res.send(`<h1>This is homepage</h1>`);
})