const express = require('express')
const app = express()
const fs = require('fs').promises
app.use(express.json());

app.get('/data', async (req, res) => {
    try {
        let fsData = await fs.readFile('./dataobject.json', 'utf8')
        console.log(fsData)
        res.set({ 'content-type': 'application/json' })
        res.send(JSON.parse(fsData))
    }
    catch (err) {
        res.json(err)
    }
})
app.post('/data', async (req, res) => {
    try {
        let existingData = JSON.parse(await fs.readFile('./dataobject.json', 'utf8'))
        //Adding array object to existing data
        let newData = [{
            name: "Alaxendar",
            emai: "alaxendar@gmail.com"
        }, {
            name: "Antony",
            emai: "antony@gmail.com"
        }]



        console.log(existingData)
        let insertedData = await fs.writeFile('./dataobject.json', JSON.stringify(existingData), 'utf8')
        console.log(insertedData)

        //Taking request from body
        let inputData = req.body
        console.log(inputData)
        await fs.writeFile('./dataobject.json', JSON.stringify(existingData), 'utf8')


        // res.set({ 'content-type': 'application/json' })
        res.json({ 'statusmessage': 'data inserted', 'insertedData': 'inputData' })
    }
    catch (err) {
        res.send(err)
    }
})
app.put('/data/:name', async (req, res) => {
    let existingData = JSON.parse(await fs.readFile('./dataobject.json', 'utf8'))
    console.log(existingData)
    let reqName = req.params.name
    let reqData = existingData.filter((x, y) => {
        return x.name == reqName
    })
    console.log(reqData)
    if (reqData.length <= 0) {
        res.json('user not found')
    } else {
        res.json('user found')
    }

})
app.listen('3100', () => {
    console.log('Express Fs server running in the port 3100')
})