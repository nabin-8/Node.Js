// Path Module

const path=require('path');

// console.log(path.basename('A:\MY Current Learnings\WEB DEvelopment\FULL-STACK\Node.Js\NodeJS\4.PathModule\index.js'));
// console.log(path.basename(__filename));
// Output: A:\MY Current Learnings\WEB DEvelopment\FULL-STACK\Node.Js\NodeJS\4.PathModule\index.js
// console.log(__filename);
// console.log(path.basename(__filename, '.js'));
/* Output:
NODE:node index.js
index.js
index
*/


console.log(path.dirname(__filename));
// A:\MY Current Learnings\WEB DEvelopment\FULL-STACK\Node.Js\NodeJS\4.PathModule

// function
console.log(path.extname(__filename));
// output
//.js

//join
console.log(path.join('/search', 'label', 'course/python', 'oop'));
// output \search\label\course\python\oop

console.log(path.join('/search', 'label', 'course/python', 'oop', '..'));
// output \search\label\course\python

// what is ..
// The last parameter ( .. ) is instructing path.json to 'go back a directory

//Another way
console.log(path.join(__dirname, 'code', 'allcode.js'));

//output A:\MY Current Learnings\WEB DEvelopment\FULL-STACK\Node.Js\NodeJS\4.PathModule\code\allcode.js


//Normalize

console.log(path.normalize('c:\\temp\\\\foo\\\\barr'));

// output c:\temp\foo\barr
// path.normalize basically normalize the path

//win32
console.log(path.win32.normalize('c:\\temp\\\\foo\\\\barr'));


// parse
console.log(path.parse(__filename));
/**
 * {
root: 'A:\\',
dir: 'A:\\MY Current Learnings\\WEB DEvelopment\\FULL-STACK\\Node.Js\\NodeJS\\4.PathModule',
base: 'index.js',
ext: '.js',
name: 'index'
}

*/
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);