//os modules for interacting wtt server and console 

const { log } = require('console')
const os = require('os')//since its built in no ('./) 

//infro about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), 
    freeMem: os.freemem(),
}
console.log(currentOS)