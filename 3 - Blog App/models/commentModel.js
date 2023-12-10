
//import mongoose
const mongoose = require('mongoose');


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //this is show id 
        ref:"Post" //this is the reference of the post model
    },
    user:{
        type:String, 
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

//export
module.exports = mongoose.model("Comment",commentSchema);
