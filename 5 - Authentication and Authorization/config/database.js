const mongoose = require('mongoose');

require('dotenv').config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(console.log('dB connected successfully'))
    .catch((error) => {console.log('essue in dB connection');
    console.error(error);
    
    
    })
}