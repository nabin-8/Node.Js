import http from 'http'

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.setHeader("content-Type", "text/html")

    // res.statusCode = 404
    // res.statusMessage = "BAD"

    // shortcut for status (code, message, & headers)
    res.writeHead(202, "Good", { "content-Type": "text/html" })
    res.write("<h1>Hello from nodejs server</h1>")
});

// listening on port 8000
server.listen(8000, () => console.log("Server up"))