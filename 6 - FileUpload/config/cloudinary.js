//npm i cloudinary

const cloudinary = require('cloudinary').v2;

exports.cloudinaryConnect = () => {//this package upload files on server to mediaserver and delete in server
    try{
        //cloudname,api_key,api_secret
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
    }catch(error){
        console.log(error);
    }

}
