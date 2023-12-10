

//server instantiate
const express = require('express');//require is use for import 
const app = express();

// use to parse request.body in express -> PUT or POST
const bodyParser = require('body-parser');

// specifically parse json data and add it to the request.Body object
app.use(bodyParser.json());

//active the server on port 3001
app.listen(3000,() => {
    console.log("server started at port 3000");
})


//Routes 
// get request
app.get('/', (request,response) => {
    response.send("This is respose");
})

//post request -> using postman
app.post('/api/cars',(request,response) => {
    const {name,brand} = request.body;

    console.log(name);
    console.log(brand);

    response.send("car sumited successfully");
})


//here connect express and mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/cars',{//here you not write localhost:27017 in node version 18 so you write 0.0.0.0:mongodbport
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("connection successfully")})
.catch(() => {console.log("recived an error")});