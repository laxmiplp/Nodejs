const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.method = 'post') {
        fs.readFile()
    }
})
server.listen(() => {
    console.log('server running in the port 3105')
})