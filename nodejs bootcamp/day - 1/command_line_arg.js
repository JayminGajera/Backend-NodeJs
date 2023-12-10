// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);//1.filename 2.what you want to write in file

const fs = require('fs');
const input = process.argv;

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);//filename,content of file
}
else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);//filename
}
else if(input[2] == 'read'){
    fs.readFile(input[3],'utf8',function(err,data){
        if(err){
            console.log('error accures');
        }else{
            console.log(data);
        }
    });
}
else{
    console.log('invalid input');
}

