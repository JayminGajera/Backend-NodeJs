
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json()); //from this line we can able to use json in our file

const blog = require("./routes/blog");
//mount with routes->blog.js
app.use("/api/v1",blog);

app.listen(PORT,() => {
    console.log(`App is started at port no ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();


//default route
app.get("/",(req,res) => {
    res.send("This is home page");
})