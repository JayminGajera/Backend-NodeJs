//import the model

const Todo = require('../models/Todo');

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body
        const {title,description} = req.body;

        //create a new Todo object and insert in db
        const respose = await Todo.create({title,description});

        //send a json respose with a success flage
        res.status(200).json(
            {
                success:true,
                data:respose,
                message:"Entry Created Successfully"

            }
        );
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