
let arr = [10,20,30,40];

let arr1 = arr.filter((ele) =>  ele<30);
console.log(arr1);

setTimeout(() => {
    console.log('setTime out');
},0)//here setTime 0 but it's also go to WEBAPI'S

let arr2 = arr.map((ele) => ele*2);
console.log(arr2);

let arr3 =  arr.reduce((curr,acc) => curr+acc,0);
console.log(arr3);

let sortarr = [3,2,0,10,90,20];
sortarr.sort();
console.log("Sorted array is: " + JSON.stringify(sortarr));

// console.log(window); -> it is supported in browser

// console.log(global); -> it is supported in nodejs environment

let message = "hey";
global.message = message; //without this line it's not working bcz message is not autometiclly in global object
console.log(global.message);

//------MODULES------
console.log(module); //it consider one file as module
//create module it means create .js file

//---------- IMPORT MODULE FORM APP.JS-----------------
const {nam,show} = require('./app');
console.log(nam);
console.log(show('i am in app'));
