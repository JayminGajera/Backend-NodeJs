const express = require('express');
const app = express();

app.set('view engine','hbs');

app.use('/',(req,res) => {
    res.render("index",{name:'req.query.name'});
});

app.listen(3000,() => {
    console.log(`Server running on port 3000`);
})