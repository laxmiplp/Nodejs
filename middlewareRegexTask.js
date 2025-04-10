const express = require('express')
const app = express()
app.use(express.json());
const userNameValidator = (req, res, next) => {
    let inputName = req.body?.username
    var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (inputName) {
        res.status(400).send("username should not be empty")

    }
    else if (usernameRegex.test(inputName)) {
        next()
    } else {
        res.status(401).send("username format is invalid")
    }
}
const passwordValidator = (req, res, next) => {
    let inputPswd = req.body?.password
    var pswdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!inputPswd) {
        res.status(400).send("Password should not be empty")
    }
    else if (pswdRegex.test(inputPswd)) {
        next()
    } else {
        res.status(401).send("Password format is invalid")
    }
}
app.post('/signup', userNameValidator, passwordValidator, (req, res) => {
    res.send('User Registered Successfully')
})
app.listen(3100, () => {
    console.log('Server runs in the port 3100')
})