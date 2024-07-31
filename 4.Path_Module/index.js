// path module

import path, { join } from "path"

// console.log(path.basename("c:\\nodejs\\index.js"));
// This return last portion of name
// console.log(path.basename("c:\\nodejs\\index.js", ".js"));


// console.log(path.dirname("c:\\nodejs\\index.js"));

// console.log(path.extname("c:\\nodejs\\index.js"));

// console.log(path.join('c:', 'nabin-dev', 'courses', 'redux'));

// Go Up A Level
// console.log(path.join('c:', 'nabin-dev', 'courses', 'redux', '..'));


// console.log(path.normalize("c:\\courses\\\\store\\features\\"));

console.log(path.parse("c:\\nodejs\\index.js"));