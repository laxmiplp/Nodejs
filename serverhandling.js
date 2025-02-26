const http = require('http')
let obj = { name: 'Laxmi', Loc: 'Hyderabad' }
const server = http.createServer((req, res) => {
    // console.log(req.url)

    // if (req.method == 'GET') {
    //     res.writeHead(200, 'Hello Laxmi', { 'content-type': 'application/json' })
    //     res.write(JSON.stringify(obj))
    //     res.end()

    // } else {
    //     res.end('Invalid Request')

    // }

    if (req.url == '/home') {
        res.writeHead(200, 'Hello Laxmi', { 'content-type': 'application/json' })
        res.write('Welcome to Home Page')
        res.end()

    } else if (req.url == '/about') {
        res.writeHead(201, 'Hello Prasanna', { 'content-type': 'application/json' })
        res.write('Welcome to About Page')
        res.end()

    } else if (req.url == '/contact') {
        res.writeHead(202, 'Hello Pillalamarri', { 'content-type': 'application/json' })
        res.write('Welcome to Contact Page')
        res.end()

    }

    else {
        res.writeHead(404, 'Not Found', { 'content-type': 'application/json' })
        res.end('Invalid Request')

    }

})
server.listen('3101', () => {
    console.log('server running in the 3101 port')
})