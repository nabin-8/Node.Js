// Blocking code
// console.log("Start");
// alert("Block")
// console.log("End");

// non blocking code
// console.log("start");
// setTimeout(() => {
//     alert("non Blocking")
// }, 1000)
// console.log("end");

// without callback
import fs from 'fs'
console.log("start");

let data = fs.readFileSync("test.txt");
console.log(data.toString());
console.log("End");