const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
            console.log(body)
        })
        req.on('error', (err) => {
            console.log(err)
            res.write(err)
        })
        req.on('end', () => {
            res.end('Data Received')
        })
    }
})

server.listen('3102', () => {
    console.log('Server running on port 3102');
});
