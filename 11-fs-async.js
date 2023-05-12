const { readFile, writeFile, } = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result) => {
    if(err){ // check if error 
    console.log(err)
    return; 
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf-8',(err,result) =>{
        if(err){ // check if error 
            console.log(err)
            return; 
            }
    const second = result; 
    writeFile('./content/result-async.txt',`This is the first result ${first}, This is the second ${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('done with this task')
    } )
    })
})
console.log('starting next task')
//asynchronous aproach faster, if serving multiple users, but messy 