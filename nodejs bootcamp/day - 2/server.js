// ----- create server without express------------------
// const http = require('http');

// const server = http.createServer((req,res) => {
    
// });

// const PORT = 3000;
// server.listen(PORT,() => {
//     console.log(`port is running on ${PORT}`);
// })

//------------- using express----------------
const express = require('express');
const app = express();
app.use(express.json());

//create route
app.get('/',(req,res) => {
    res.status(200).send('Hello this is an express server');
}); 

//create route
app.get('/about',(req,res) => {
    res.status(200).send('Hello i am about');
});

app.post('/add-name',(req,res) => {
    const {name,no} = req.body;
    console.log(`your name is ${name} and no is ${no}`);
})

//middleware
app.get(
      '/use-middleware',
        (req,res,next) => {
            console.log('middleware called...');
            next();
        }, 
        (req,res) => {
                console.log('get request called...');
                res.send('response sent');
        }
);

//listen server
const PORT = 3000;
app.listen(PORT ,()=> {
    console.log(`server is running on ${PORT}`);
});

