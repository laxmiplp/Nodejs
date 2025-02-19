const http = require('http')
// const server = http.createServer((req, res) => {
//     res.write('Node js server started')
//     res.end('response provided')
// })
// server.listen('3101', () => {
//     console.log('server is running')
// })
const server1 = http.createServer((req, res) => {
    res.write('Welcome to IP Address')
    res.end('')
})
server1.listen('3102', '192.168.100.5', () => {
    console.log('Server running showin an IP Address')
})