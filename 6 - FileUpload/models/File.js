const mongoose = require('mongoose');

//import node mailer 
//npm i nodemailer
const nodemailer = require('nodemailer');

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

//post middleware ->Note:it is define before mongoose.model
fileSchema.post('save',async function(doc){//entry save in db is called doc
    try{
        console.log('doc',doc);

        //transporter
        //shift this configration under config folder
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });

        //send mail
        let info = await transporter.sendMail({
            from:`JayminTech`,
            to:doc.email,
            subject:'New File Uploaded On Cloudinary',
            html:`<h2>Hello </h2><p>File Uploaded Successfully</p> view here <a href='${doc.imageUrl}'>${doc.imageUrl}</a>`,
        })

        console.log('info',info);


    }catch(error){
        console.error(error);
    }
});


const File = mongoose.model('File',fileSchema);
module.exports = File;