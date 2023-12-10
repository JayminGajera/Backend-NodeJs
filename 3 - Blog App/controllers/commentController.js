//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//bussiness logic
exports.createComment = async(req,res) => {
    try{
        //fetch data from request ki body
        const {post,user,body} = req.body;

        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the comment into the database 
        const savedComment = await comment.save(); //save function is opetional from the create function //using this function insert comment in database

        //find the post by Id, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}},{new:true})//here new:true means updated document aayega
                            .populate("comments") //let say mujhe id nahi chahiye muje actual doucment chahiye so using populate we recive actual document which have this id
                            .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment"
        });
    }
}