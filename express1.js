const express = require('express')
const fs = require('fs')
const app = express()
app.get("/data", (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
            res.send(err)
        } else {
            // res.send(data)
            let parsedData = JSON.parse(data)
            res.setHeader('content-type', 'application/json')
            // res.json(parsedData)

            res.status(200)
                .json({ "status": 200, message: "Data retrived successfully", response: parsedData })
        }
    })
})
app.listen('3100', () => {
    console.log('server running in the port 3100')
})