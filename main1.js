const http = require('http')
const server = http.createServer((req, res) => {
    res.write('Node js server started')
    res.end('response provided')
})
server.listen('3101', () => {
    console.log('server is running')
})
