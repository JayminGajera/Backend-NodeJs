const User = require('../models/User');
require('dotenv').config();

//install bcrypt library for encryption {npm i bcrypt}
const bcrypt = require('bcrypt');

//import jwt token
const jwt = require('jsonwebtoken');

//signup route handler
exports.signup = async(req,res) => {
    try{
        //get data
        const {name,email,password,role} = req.body;

        //check if user alredy exists
        const existinguser = await User.findOne({email});

        if(existinguser){
            return res.status(400).json({
                success:false,
                message:'User Alredy Exists'
            });
        }

        //secure password
        let hasedpassword;

        try{
            hasedpassword = await bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:'Error in hashing password'
            });
        }


        //craete entry for user
        const user = await User.create({
            name,email,password:hasedpassword,role
        })
        return res.status(200).json({
            success:true,
            message:'User Created Successfully'
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'User cannot registerd, please try again later'
        });
    }
}


//login

exports.login =  async (req,res) => {
    try{
        //fetch data
        const {email,password} = req.body;

        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully'
            });
        }

        //check user exist or not
        let user = await User.findOne({email});

        //if not a resistered user
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User Not Exist'
            });
        }
        

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        };
        //verify password and generate jwt token
        if(await bcrypt.compare(password,user.password)){
            //password match 
            // create token using {npm i jsonwebtoken}
            let token = jwt.sign(payload,
                                 process.env.JWT_SECRET,
                                 {
                                    expiresIn:'2h'
                                 });

            user = user.toObject();
            user.token = token;//add token in user object
            user.password = undefined;//remove password from user object bcz other wise hacker ko email and password dono mil jayenge

            //create cookie -> 3 perameters (nameofcookie,cookiedata,options->validity->expires)
            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),//this is cookies expires time if time is expire so portal tumhe firse login karne ko bolega exp.chatgpt
                httpOnly:true, //means client side pe access nahi kar paonge
            };
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged In Successfully'
            });


        }
        else{
            //password do not match
            return res.status(403).json({
                success:false,
                message:'Password Incorrect'
            });
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure'
        });
    }
}