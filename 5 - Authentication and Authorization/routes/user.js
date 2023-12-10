const express = require('express');
const router = express.Router();
const User = require('../models/User');

const {login,signup} = require('../controllers/Auth');
const {auth,isAdmin, isStudent} = require('../middlewares/auth');

router.post('/login',login);
router.post('/signup',signup);

router.get('/test',auth,(req,res) => {
    return res.status(200).json({
        success:true,
        message:'Welcome to the protected route for tests'
    });
})
//protected router
router.get('/student',auth,isStudent,(req,res) => {
    return res.status(200).json({
        success:true,
        message:'Welcome to the protected route for student'
    });
});

router.get('/admin',auth,isAdmin,(req,res) => {
    return res.status(200).json({
        success:true,
        message:'Welcome to the protected route for admin'
    });
});

router.get('/getEmail',auth,async(req,res) => {


    try{
        const id = req.user.id;
        console.log('id : ',id);
    
        const user = await User.findById(id);
    
        return res.json({
            success:true,
            id:id,
            message:'Welcome to the Email route',
            user:user, 
            
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'error in fetching data'
        })
    }
  
})
module.exports = router;