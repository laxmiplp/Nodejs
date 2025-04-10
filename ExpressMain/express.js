const express = require('express')
// console.log(express)
const app = express()
app.get('/one', (req, res) => {
    res.send('Im Get Method')

})
app.post('/one', (req, res) => {
    res.send('Im Post Method')

})
app.put('/one', (req, res) => {
    res.send('Im Put Method')

})
app.patch('/one', (req, res) => {
    res.send('Im Patch Method')

})
app.delete('/one', (req, res) => {
    res.send('Im Delete Method')

})
app.listen('3125', () => {
    console.log('Server running in the port 3125')
})