
const mongoose = require('mongoose');

require("dotenv").config(); //from this line je pan .env ma define kiya hoga wo saraka sara load ho jayega process object ke ander. 

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{//url ne process object ma insert karavva mate {npm i dotenv} library install karvi pade
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) 
    .then(() => {console.log("db connected successfully")})
    .catch((error) => {console.log("error in db connection");
        console.error(error.message);
        process.exit(1);})
}

module.exports = dbConnect;