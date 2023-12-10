//Auth, isStudent, isAdmin

const jwt = require('jsonwebtoken');

require('dotenv').config();

//3 perameters in middleware after one middleware call next middleware in route
exports.auth = (req,res,next) => {
    try{

        console.log('cookie',req.cookies.token);
        console.log('body',req.body.token);
        console.log('header',req.header('Authorization'));


        //extract JWT token
        //other ways to fetch token || req.cookie.token
        const token = req.cookies.token ||  req.body.token || req.header('Authorization').replace('Bearer','');//req karo header ke under and authorization key ki value le ke aavo and bearer space ko replace with empty string so final token vadhe

        if(!token || token === undefined){
            return res.status(501).json({
                success:false,
                message:'token missing'
            });
        }

        //verify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
        }catch(error){
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            });
        }
        next();

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'something went to wrong, while verifying the token'
        })
    }
}

//2 middleware

exports.isStudent = (req,res,next) => {
    try{
        if(req.user.role !== 'Student'){
            return res.status(401).json({
                success:false,
                message:'This is protected route for student'
            });
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'user role is matching'
        });
    }
}

//3 middleware

exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role !== 'Admin'){
            return res.status(401).json({
                success:false,
                message:'This is protected route for Admin'
            });
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'user role is matching'
        });
 }
}