const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

//localfileupload -> handler function

exports.localFileUpload = async (req,res) => {
    try{
        //fetch file
        const file = req.files.file;//request ke ander postman ki ander files box me file name hoga usme file upload hai
        console.log('file : ',file);

        //server pe konse path pe file ko store karna chahte ho
        //__dirname (double underscore dirname) shows a current directry here is controllers
        //this is path of server
        //explain path : current working directery + files folder hoga + name of file + extension of file
        let path = __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`; 
        console.log('path',path);

        file.mv(path,(error) => {//file move(upload) on this path
            console.log(error);
        });

        res.json({
            success:true,
            message:'local file uploaded successfully'
        });
    }catch(error){
        console.log(error);
    }
}

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){

    const options = {folder};

    if(quality){
        options.quality = quality;
    }

    options.resource_type = 'auto';
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

//image upload handler
exports.imageUpload = async(req,res) => {
    try{
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile; //here req.files.<filename>
        console.log(file);

        //validation
        const supportedTypes = ['jpg','jpeg','png'];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log('filetype : ',fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File formate not supported'
            });
        }

        //file formate supported
        //so we upload cloudnary
        const response = await uploadFileToCloudinary(file,'Jaymin');
        console.log(response);


        // entry save in database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'image successfully uploaded'
        })


    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'something went wrong'
        });
    }
}


//video upload handler
exports.videoUpload = async(req,res) => {
    try{
         //data fetch
         const {name,tags,email} = req.body;
         console.log(name,tags,email);

         const file = req.files.videoFile;

        //validation
        const supportedTypes = ['mp4','mov'];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log('filetype : ',fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File formate not supported'
            });
        }

        //so we upload cloudnary
        const response = await uploadFileToCloudinary(file,'Jaymin');
        console.log(response);

         // entry save in database
         const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'video successfully uploaded'
        })


    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'something went wrong'
        });
    }
}


//imageReducerUpload handler

exports.imageReducerUpload = async(req,res) => {
    try{
          //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile; //here req.files.<filename>
        console.log(file);

        //validation
        const supportedTypes = ['jpg','jpeg','png'];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log('filetype : ',fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File formate not supported'
            });
        }

        //file formate supported
        //so we upload cloudnary
        const response = await uploadFileToCloudinary(file,'Jaymin',30);
        console.log(response);


        // entry save in database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'image successfully uploaded'
        })
    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'something went wrong'
        });
    }
}