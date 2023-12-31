
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//cookies parser -> {npm i cookie-parser}
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

require('./config/database').dbConnect();


//route import and mount
const user = require('./routes/user');
app.use('/api/v1',user);

app.listen(PORT, () => {
    console.log(`App is listing on port ${PORT}`);
});

app.get("/",(req,res) => {
    return res.send(`<h1>This is homepage</h1>`);
})