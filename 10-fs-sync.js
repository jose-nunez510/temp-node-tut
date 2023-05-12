//interacting with file modules (sync)

const { log } = require('console'); // running sychronously, can take longer if multiple users 
const {readFileSync, writeFileSync} = require('fs'); 
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8') // to connect to file 
const second = readFileSync('./content/second.txt', 'utf-8')

//console.log(first, second) // printing out whats in file 
writeFileSync('./content/result-syncs.txt', `Here is the result ${first}, ${second}`, {flag: 'a'}) 
console.log('done with this task')
console.log('starting the next on');