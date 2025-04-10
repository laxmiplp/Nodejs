const express = require('express')
const app = express()
const fs = require('fs')
// app.use(express.json())
app.use(express.text())

app.post('/data', (req, res) => {
    let inputData = req.body
    fs.writeFile('./expressintro.txt', inputData, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('data inserted')
        }
    })
})
app.listen('3211', () => {
    console.log('server started in the port 3211')
})