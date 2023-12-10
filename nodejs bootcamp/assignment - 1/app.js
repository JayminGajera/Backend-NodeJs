const fs = require('fs');
const r1 = require('readline');

var prompts = r1.createInterface(process.stdin,process.stdout);

// create file
function createFile(){
    prompts.question('Enter File Name : ',function(fileName){
        var msg = "";
        if(fileName === ''){
            msg = "file name is empty";
        }
        else if (fs.existsSync(fileName)) {
            msg = "File already exists!";
        } else {
            fs.writeFileSync(fileName, 'hello');
            msg = "File created successfully!";
        }

        console.log(msg);
        openFile();
    });
}

//2.open a file
function openFile(){
    prompts.question('Enter File Name You Want To Open : ',function(fileName){
        var msg = "";
        if(fileName === ''){
            msg = "File name is empty";
        }
        else if(!fs.existsSync(fileName)){
            msg = "File is not exist ";
        }
        else{
            fs.readFile(fileName,'utf8',function(err,data){
                if(err){
                    msg = "Error while reading file";
                }else{
                    console.log(data);
                }
            });
        }

        console.log(msg);
        ask_exit();
    });
    
}

//exit program
function ask_exit(){
    prompts.question('You want to exit program (y/n) : ',function(ans){
        if(ans === 'y'){
            process.exit();
        }
    });
}


createFile();