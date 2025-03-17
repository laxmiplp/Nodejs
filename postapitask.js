const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    // if (req.method == 'POST') {
    //     let ipData = ''
    //     req.on('data', (chunk) => {
    //         ipData += chunk.toString()
    //         res.end('data received')

    //     })
    //     // req.on('end', () => {
    //     //     fs.writeFile('./apitask.txt', ipData, (err) => {
    //     //         if (err) {
    //     //             console.log(err)
    //     //             res.write(err)
    //     //             res.end()
    //     //         } else {
    //     //             res.write('data inserted')
    //     //             res.end()
    //     //         }
    //     //     })

    //     // })
    //     req.on('end', () => {
    //         fs.appendFile('./apitask.txt', ipData, (err) => {
    //             if (err) {
    //                 console.log(err)
    //                 res.write(err)
    //                 res.end()
    //             } else {
    //                 res.write('data inserted')
    //                 res.end()
    //             }
    //         })

    //     })

    // }
    //Array Data
    if (req.method == 'GET') {

        fs.readFile('./arryadata.json', 'utf8', (err, data) => {
            if (err) {
                res.write(err)
                res.end()
            } else {
                res.writeHead(200, 'ok', { "content-type": 'application/json' })
                console.log(data)
                res.write(typeof JSON.parse(data))
                res.end()
            }
        })


    }
})
server.listen('3105', () => {
    console.log('server running in the port 3105')
})