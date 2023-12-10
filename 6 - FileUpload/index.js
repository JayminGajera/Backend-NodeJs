//app create
const express = require('express');
const app = express();

//port find karna hai
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware add karna hai
app.use(express.json());

//different ways for express interect with files -> 1.multer 2.express fileupload
//npm i express-fileupload
const fileupload = require('express-fileupload'); 
// app.use(fileupload());//this package upload files on server
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

//db se connect 
const db = require('./config/database');
db.connect();

//cloud se connect 
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api route mount karna he
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload',Upload);

//activate server
app.listen(PORT,() => {
    console.log(`App is running on port ${PORT}`);
})
