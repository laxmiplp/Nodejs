const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs').promises
app.get('/data', async (req, res) => {
    try {
        let data = await fs.readFile('./users.json', 'utf8')
        let parsedData = JSON.parse(data)
        res.status(200)
            .json({ status: '204', message: 'Data retrived successfully', data: parsedData })
    } catch (err) {
        res.status(500).send({ message: 'something went wrong', err: err })
    }
})
app.post('/data', async (req, res) => {
    try {
        //Adding new object data
        // let newData = { "id": '104', "name": 'Shrinika', "dep": 'Aerospace', "exp": '7 yrs' }
        //Taking request from body
        let newData1 = req.body
        let existingData = JSON.parse(await fs.readFile('./users.json', 'utf8'))
        // existingData.push(newData)
        existingData.push(newData1)

        console.log(existingData)
        await fs.writeFile('./users.json', JSON.stringify(existingData))
        res.status(201)
            .json({ status: '201', message: 'Data Inserted successfully' })
    } catch (err) {
        res.status(500).send({ message: 'something went wrong', err: err })

    }
})
// app.get('/data/:name', async (req, res) => {
//     try {
//         console.log(req.params)
//     }
//     catch (err) {

//     }
// })
app.get('/data/:id', async (req, res) => {
    try {
        let index = req.params.id
        let data = JSON.parse(await fs.readFile('./users.json', 'utf8'))
        res.status(200)
            .json({ status: '200', message: 'Data received successfully', data: data[index] })
    } catch (err) {
        res.status(500).send({ message: 'something went wrong', err: err })
    }
})

app.listen('3100', () => {
    console.log('Express fs server running in the port 3100')
})