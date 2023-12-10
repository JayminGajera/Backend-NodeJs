const axios = require('axios');//it is used for backend api called testing 

function callAxios_WithCallback(){
    axios.get('https://google.com').then((res) => {
        console.log(res);
    })
}

async function callAxios_withAwait(){
    const res = await axios.get('https://google.com');
    console.log(res);
}

// callAxios_WithCallback();
callAxios_withAwait();


//npm i validator
const validator = require('validator');


