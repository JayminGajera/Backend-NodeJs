//import the model

const Todo = require('../models/Todo');

//define route handler

exports.deleteTodo = async(req,res) => {   
    try{
        const {id} = req.params;//in router /deleteTodo:id likha hai so if we want access id object so we use params
        
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo deleted",
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