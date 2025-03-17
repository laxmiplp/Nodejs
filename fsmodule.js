const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        // fs.readFile('./sample.txt', 'utf8', (err, data) => {
        //     if (err) {
        //         console.log(err)
        //         res.write(err)
        //         res.end()
        //     } else {
        //         console.log(data)
        //         res.write(data)
        //         res.end()

        //     }
        // })
        // fs.readFile('./info.txt', 'utf8', (err, data) => {
        //     if (err) {
        //         console.log(err)
        //         res.write(err)
        //         res.end()
        //     } else {
        //         console.log(data)
        //         res.write(data)
        //         res.end()

        //     }
        // })
        let ipData = 'Laxmi'
        // fs.writeFile('./sample.txt', ipData, (err) => {
        //     if (err) {

        //         res.end(err)
        //     } else {
        //         res.write("data inserted")
        //         res.end()

        //     }
        // })
        fs.appendFile('./info.txt', ipData, (err) => {
            if (err) {
                console.log(err)
                res.end(err)
            } else {
                res.end("data appended")

            }
        })

    }
})
server.listen("3105", () => {
    console.log('server running in port 3105')
}

)