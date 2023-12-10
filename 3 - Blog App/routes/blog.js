const express = require('express');
const router = express.Router();

//import controller 
const {createComment} = require("../controllers/CommentController");
const {createPost,getAllposts} = require("../controllers/PostController");
const {likePost,unLikePost} = require("../controllers/LikeController");


//mapping create
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllposts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unLikePost);



//export
module.exports = router;