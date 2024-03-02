// Wrapper Module
// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });

// node js wrapp the whole code in
/**
 (function(exports, require, module, __filename, __dirname) {
     // Module code actually lives in here
     console.log("Hello");

 });
 */

console.log("Hello");
console.log(__filename);
console.log(module);
console.log(__dirname);

// exports
// Is used when export the code

//require
// Is used when import the code