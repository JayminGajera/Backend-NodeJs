//import the model

const Todo = require('../models/Todo');

//define route handler

exports.updateTodo = async(req,res) => {
    try{
       const {id} = req.params;
       const {title,description} = req.body;
       const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updateAt:Date.now()},
       )

       res.status(200).json({
        success:true,
        data:todo,
        message:`update successfully`,
       })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                message:error.message,
            }
        )
    }
}