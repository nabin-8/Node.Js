```nodejs
C:\Users\lenovo>node
Welcome to Node.js v20.11.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
>
```

```nodejs
> 1+2
3
> a=10
10
> function myfun(){console.log('Hello REPL')}
undefined
> myfun()
Hello REPL

```

```nodejs
> function add(a,b){
... console.log(10,20)
... }
undefined
> add()
10 20
```