const fs = require('fs')
fs.readFile('file.text','utf8',(err,data)=>{
    if(err){
        console.error(err);
         return 0; }
         console.log(data)
});

console.log("File reading is done....")

