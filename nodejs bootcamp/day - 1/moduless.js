/*
this are inbuild modules
--------1.os---------

--------2.path------
->in windows \ use for path and in macos / is use for path so path module give you right path automatically bcz you dont know in which system you code is run 

-------3.file module--------

------4. events----

*/

const os = require('os');
const totalMemory = os.totalmem();
console.log(totalMemory);

const path = require('path');
console.log(path.parse(__filename));

const fs = require('fs');
const files = fs.readdirSync('./');//how many file in current directory (sync)
console.log(files);

const files1 = fs.readdir('./',function(error,files){//async
    if(error){
        console.log("Error", error);
    }else{
        console.log('files',files);
    }
});

//read txt file module

var f = require("fs");

function readData(err, data) {
	 if(err){
        console.log("Error", err);
     }else{
        console.log(data);
     }
}

const readCotent = f.readFile('hello.txt', 'utf8', readData);
console.log(readCotent);


//------event -------------------------------------
const emitter = require('./emit');

//register a listener
emitter.emitter.on('messageLogged',function(args){
    console.log('listener called',args);
})

const displayModule = require('./app');
displayModule.display('hello world');