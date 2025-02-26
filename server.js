const http = require('http')
let obj = { name: 'Laxmi', loc: 'Hyderabad' }
const server = http.createServer((req, res) => {
    console.log(req.method)
    res.writeHead(201, 'response provided', { 'content-type': 'application/json' })
    // res.writeHead(201, 'response provided', { 'content-type': 'plain/text' })
    // res.writeHead(201, 'response provided', { 'content-type': 'plain/html' })

    res.write(JSON.stringify(obj))
    res.end()
})
server.listen(
    '3101', () => {
        console.log('server runing in the 3101 port')
    }
)