const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    // console.log(parsedURL.query)
    console.log(parsedURL.query.tickets)

    console.log(req.url)
    if (req.method = 'GET') {
        if (req.url == '/KALKI') {
            res.writeHead(200, 'kalki', { 'content-type': 'application/json' })
            res.write(JSON.stringify({ 'Movie Name': 'kalki', screen: 'one' }))
            res.end()
        } else if (req.url == '/GAMECHANGER') {
            res.writeHead(200, 'ok', { 'content-type': 'application/json' })
            res.write(JSON.stringify({ 'Movie Name': 'game changer', screen: 'two' }))
            res.end()
        }
        else if (req.url == '/THANDEL') {
            res.writeHead(200, 'ok', { 'content-type': 'application/json' })
            res.write(JSON.stringify({ 'Movie Name': 'thandel', screen: 'three' }))
            res.end()
        }

        else {
            res.writeHead(404, 'NOT FOUND', { 'content-type': 'text/plain' })
            res.write("Movie Not Found")
            res.end()
        }
    } else if (req.method = 'PUT') {
        res.end()

    }
    else if (req.method = 'POST') {
        res.end()

    } else if (req.method = 'DELETE') {
        res.end()

    } else {
        res.end()

    }

})
server.listen('3101', () => {
    console.log('Movie app server running on port 3101')
})