const express = require('express')
const app = express()
//ex: 1 [sample middleware]
// app.use((req, res, next) => {
//     if (true) {
//         next()
//     } else {
//         res.status(404).json({ "message": "error occured in middleware 1" })
//     }
// })
// app.use((req, res, next) => {
//     if (!true) {
//         res.send('middleware 2 is executing')

//     } else {
//         res.status(404).json({ "message": "Something error occured in middleware 2" })
//     }
// })
// app.get('/info', (req, res) => {
//     res.send('hello')
// })

//ex: 2 [Global middleware]
// var isValid = true
// var isEligible = false

// app.use((req, res, next) => {
//     if (isValid) {
//         res.status(200).send("I'm middleware - 1")
//         next()
//     } else {
//         res.status(404).send('Some Error occured in  middleware -1')
//     }
// })
// app.use((req, res, next) => {
//     if (isEligible) {
//         res.status(200).send("I'm middleware - 2")
//     } else {
//         res.status(404).send('Some Error occured in  middleware -2')
//     }
// })
//ex: 3 [Handling multiple routes with middleware]

const middleware1 = (req, res, next) => {
    if (true) {
        next()
    } else {
        res.status(404).send('Some Error occured in  middleware -1')
    }
}
const middleware2 = (req, res, next) => {
    if (!true) {
        next()

    } else {
        res.status(404).send('Some Error occured in  middleware -2')
    }
}
app.get('/info', middleware1, middleware2, (req, res) => {
    res.send('Hello')
})
app.listen(3100, () => {
    console.log('server is running in the port 3100')
})