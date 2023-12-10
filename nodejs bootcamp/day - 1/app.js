const name = 'jaymin';

function show(message){
    console.log(message);
}

module.exports.nam = name; //nam is alias name
module.exports.show = show;
// module.exports = app; -> all module export

console.log(module);

//module is like class , in this whatever you exports it will be accessble out side of this moudle other functions 
// are act like private


//------------------ how module exicute---------------------
//module wrapping in one function behind the seen
// function(exports,require,module,__filename,__dirname){

// }
console.log('this is file name of your file',__filename);


//------------------------------------------------------------------
const emitter = require('./emit');
function display(message){
    console.log(message);

    emitter.emitter.emit('messageLogged',{id:1,messageText:message});
}

module.exports.display = display;