import http from 'http'

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.end(`
            <h1>Home</h1>
            <a href='/contact'>Contact page</a>
            <a href='/about'>About page</a>
            `)
    } else if (req.url === '/about') {
        res.end(res.end(`
            <h1>About Page</h1>
            <a href='/'>Home page</a>
            <a href='/contact'>Contact page</a>
            `))
    } else if (req.url === '/contact') {
        res.end(res.end(`
            <h1>Contact Page</h1>
            <a href='/'>Home page</a>
            <a href='/about'>About page</a>
            `))
    } else {
        res.end("<h1>Page not Found 404</h1>")
    }
})

server.listen(8000, () => console.log("Server Up!"))

// homepage
// about
// contact