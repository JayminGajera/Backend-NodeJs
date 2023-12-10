const { response } = require("express");
const Todo = require("../models/Todo");


//define route handler

exports.getTodo = async(req,res) => {
    try{
       //fetch all todo items from database 
       const todos = await Todo.find({});

       //update the response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire Todo data is fetched",
       });
    }
    catch(error){
       console.error(error);
       res.status(500)
       .json({
        success:false,
        error:error.message,
        message:"server side error"
       })
    }
}


exports.getTodoById = async(request,response) => {
   try{
      //extract todo id basis on id
      const id = request.params.id;
      const todo = await Todo.findById({_id:id});

      //data for given id is not found
      if(!todo){
         return response.status(404).json({
            success:false,
            message:"No Data Found With Given Id",
         })
      }

      //data for given id found
      response.status(200).json({
         success:true,
         data:todo,
         message:`Todo ${id} data successfully fetched`,

      })
   }
   catch(err){
      console.error(error);
      res.status(500)
      .json({
       success:false,
       error:error.message,
       message:"server side error"
      })
   }
}