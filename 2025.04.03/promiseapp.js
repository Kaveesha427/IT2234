/*const { PerformanceNodeTiming } = require("perf_hooks")

Promise

is object from a operation
mention the operation of the operation
3 states:
    1 waiting/Pending
    2 fulfilled/resolved - done
    3 rejected/ error */

    const fs = require('fs').promises;
    const readFile = (filepath)=>{
        return fs.readFile('file1.text','utf8')// return a promise
    }

    readFile('file1.text').then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.error(err)
    })