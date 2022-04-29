// const fs = require('fs')
// const readline = require('readline')
// // const { stdin: input, stdout: output } = require('process')

// const readStream = fs.createReadStream('C:/Users/nekhaychuk/Desktop/loadscript/node/lesson3/lesson3/access.log', 'utf8')
// const writeStream1 = fs.createWriteStream('89.123.1.41_requests.log')
// const writeStream2 = fs.createWriteStream('34.48.240.111_requests.log')

// const rl = readline.createInterface({
// input: readStream,
// // input: fs.createReadStream('../access.log'),
// // output: process.stdout,
// terminal: true,
// });

// rl.on('line', (line) => {
// if (line.includes("89.123.1.41")) {
// // writeStream1.write(line + "\n")
// console.log(writeStream1)
// }

// if (line.includes("34.48.240.111")) {
// // writeStream2.write(line + "\n")
// console.log(writeStream2)
// }
// });

const fs = require('fs')
const readStream = fs.createReadStream('access.log', 'utf8')
//const writeStream1 = fs.createWriteStream('89.123.1.41_requests.log')
//const writeStream2 = fs.createWriteStream('34.48.240.111_requests.log')

readStream.on('data', (line) => {
const writeStream1 = fs.createWriteStream('89.123.1.41_requests.log')
// writeStream1.write(chunk)
//if (!readStream(data)) {
if (line.includes("89.123.1.41")) {
console.log(writeStream1)
}

const writeStream2 = fs.createWriteStream('34.48.240.111_requests.log')
 //   writeStream2.write(chunk)
   // if (!readStream(data)) {
    if (line.includes("34.48.240.111")) {
          console.log(writeStream2)
    }
});
// const fs = require('fs')
// const lineReader = require('line-reader');

// lineReader.eachLine('../access.log', ("89.123.1.41", "34.48.240.111") => {
// console.log("89.123.1.41", "34.48.240.111");
// });
