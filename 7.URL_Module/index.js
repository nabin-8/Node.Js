import { URL } from "url";

const myURL = new URL("https://www.examole.com:8080/p/a/t/h?query=string#hash")

// console.log(myURL.hash);
// console.log(myURL.host);
// console.log(myURL.hostname);
// console.log(myURL.port);
// console.log(myURL.href);


// console.log(myURL.protocol);
// console.log(myURL.search);
// console.log(myURL.searchParams);

// both works the same
console.log(myURL.toString());
console.log(myURL.toJSON());