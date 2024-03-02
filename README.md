# Node.Js
|No|TOC|No|TOC|
|---|---|---|---|
|1.|[Introduction to Node JS](#1introduction-to-node-js)|10.|[URL Module in Node JS](#10url-module-in-node-js)|
|2.|[Install Node JS](#2install-node-js)|11.|[Event Module in Node JS](#11event-module-in-node-js)|
|3.|[REPL in Node JS](#3repl-in-node-js)|12.|[HTTP Module and create web server in Node JS](#12http-module-and-create-web-server-in-node-js)|
|4.|[Run First Project on Node JS Environment](#4run-first-project-on-node-js-environment)|13.|[Nodemon in Node JS](#13nodemon-in-node-js)|
|5.|[Wrapper Module in Node JS](#5wrapper-module-in-node-js)|14.|[HTTP Module Properties in Node JS](#14http-module-properties-in-node-js)|
|6.|[Path Module in Node JS](#6path-module-in-node-js)|15.|[Routing and Serving HTML Pages in Node JS](#15routing-and-serving-html-pages-in-node-js)|
|7.|[Use ES6 important statement in Node JS](#7use-es6-important-statement-in-node-js)|16.|[DNS Module in Node JS](#16dns-module-in-node-js)|
|8.|[File System Module in Node JS](#8file-system-module-in-node-js)|17.|[Import and Export Statement in Node JS](#17import-and-export-statement-in-node-js)|
|9.|[OS Module in Node JS](#9os-module-in-node-js)|18.|[After Learning Node JS]()|

### 1.Introduction to Node JS
#### What is NodeJS?
 - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 - Node.js allows you to run JavaScript on the server.
 - Node.js also provides library of various JavaScript modules which helps to develop web applications.
 - Nodejs was developed by Ryan Dahl in 2009.
 - Nodejs is not language or a framework. it is runtime environment.
 - [NodeJS](https://nodejs.org/en)
 - [V8-Engine](https://v8.dev/)
#### Advantages of NodeJS
 - Open Source
 - Efficient, Fast and Highly Scalable
 - Event Driven
 - Very Popular

### 2.Install Node JS
 - NodeJS Installation 
 - GO to [NodeJS](https://nodejs.org/en) official site
 - According to your os you can download

### 3.REPL in Node JS
#### What is REPL?
 - Read-Eval-Print-Loop (REPL)
 - Is module
 - It is used to testing
#### What can you do in REPL?
 1. JavaScript Expression
 1. Variable
 1. Global and Local Scope
 1. _ (underscore) Variable
 1. Function

#### REPL Commands
 1. break Sometimes you get stuck, this gets you out
 1. .clear Alias for .break
 1. .editor Enter editor mode (Ctrl+D to finish, Ctrl+C to cancel).
 1. «exit Exit the REPL
 1. help Print this help message
 1. load Load JS from a file into the REPL session e.g. .load ./file/to/load.js
 1. save Save all evaluated commands in this REPL session to a file e.g. .save ./file/to/save.js
 1. Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
 
### 4.Run First Project on Node JS Environment
 - npm init
 - To initialize node projecr
 - Then it creates package.json file

### 5.Wrapper Module in Node JS
#### What is Wrapper Module?
1. Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like
the following:
 ``` javascript
    (function(exports, require, module, __ filename, dirname) {
    // Module code actually lives in here

 ```

1. By doing this, Node.js achieves a few things:
   - It keeps top-level variables (defined with var, const or let) scoped to the module rather than the
    global object.
1. It helps to provide some global-looking variables that are actually specific to the module, such
as:
   1. The module and exports objects that the implementor can use to export values from the module. 
   1. The convenience variables filename and dirname, containing the module's absolute filename and directory path. 

1. exports — A reference to the module.exports that is shorter to type.
1. require — Used to import modules.
1. module — A reference to the current module.
1. __ dirname — The directory name of the current module. This is the same as the path.dirname() of the __ filename.
    - Example:- console.log(__dirname);
1. __ filename — The file name of the current module. This is the current module file's absolute path with symlinks
resolved.
    - Example:- console.log(__ filename);
### 6.Path Module in Node JS
#### What is Path Module?
- The path module provides utilities for working with file and directory paths. It can be accessed using:
- const path = require('path’);
1. basename() — The basename() method returns the last portion of a path, similar to the Unix basename command. 
1. Trailing directory separators are ignored. 
1. Syntax:- basename(path[, ext]) 
1. Example:- basename(‘/test/something.html’, <html’); 
1. dirname() — The dirname() method returns the directory name of a path, similar to the Unix dirname command. 
1. Trailing directory separators are ignored. 
1. Syntax:- dirname(path) 
1. Example:- dirname(‘/test/something.html’); 

#### Path Module

1. extname() - The extname() method returns the extension of the path, from the last occurrence of the . (period) 
character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there 
are no . characters other than the first character of the basename of path, an empty string is returned. 
1. Syntax:- extname(path) 
1. Example:- extname('index.html’); 
1. join() — The join() method joins all given path segments together using the platform-specific separator as a 
1. delimiter, then normalizes the resulting path. 
1. Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, 
1. representing the current working directory. 
1. Syntax:- join([...paths]) 
1. Example: join('/search', 'label', 'course/python', 'oop', '..');

#### Path Modules
1. normalize() — The normalize() method normalizes the given path, resolving '..' and '.' segments. If the path is a
1. zero-length string, '." is returned, representing the current working directory.
1. Syntax:- normalize(path)
1. Example:
1. normalize('C:\\temp\\\\foo\\bar\\..\\");
1. win32.normalize('C:////temp\\V\V\Vfoo/bar”);
1. Note - win32 property provides access to Windows-specific implementations of the path methods.
1. parse() — The parse() method returns an object whose properties represent significant elements of the path.
1. Trailing directory separators are ignored.
1. Syntax:- parse(path)
1. Example:- parse('C:\\path\\dir\\file.txt');

#### Path Modules
1. isAbsolute() — The path.isAbsolute() method determines if path is an absolute path. If the given path is a zero-
1. length string, false will be returned.
1. Syntax:- isAbsolute(path)
1. Example:
1. isAbsolute('//server'); // true 
1. isAbsolute(\\\\server'); // true
1. isAbsolute('C:/foo/.."); // true
1. isAbsolute('C:\\foo\\.."); // true
1. isAbsolute('bar\\baz'); // false
1. isAbsolute('bar/baz'); // false
1. isAbsolute('."); // false

### 7.Use ES6 important statement in Node JS
### 8.File System Module in Node JS
### 9.OS Module in Node JS
### 10.URL Module in Node JS
### 11.Event Module in Node JS
### 12.HTTP Module and create web server in Node JS
### 13.Nodemon in Node JS
### 14.HTTP Module Properties in Node JS
### 15.Routing and Serving HTML Pages in Node JS
### 16.DNS Module in Node JS
### 17.Import and Export Statement in Node JS
### 18.After Learning Node JS