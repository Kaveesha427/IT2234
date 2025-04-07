const fs = require('fs').promises;
const readFile =async ()=>{
    try{

        const[data1,data2]=await Promise.allSettled([
            fs.readFile('file.text','utf8'),fs.readFile('data.text','utf8')
        ])
        //const data1 =await fs.readFile('file.text','utf8')
        //const data2 =await fs.readFile('data.text','utf8')
        console.log(data1)
        console.log(data2)
        console.log(data2.status)
        console.log(data2.value)
    }catch (err){
        console.log(data.status)
        console.error(err);
    }
}
readFile()