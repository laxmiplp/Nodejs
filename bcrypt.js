const bcrypt = require('bcrypt')
const fs = require('fs')
let password = 'ILoveIndia'
bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.log(err)
    } else {
        console.log(hash)
    }
})
fs.readFile('./password', 'utf8', (err, data) => {
    if (err) {
        console.log('Error Occured')
    } else {
        let storedPswd = data
        bcrypt.compare(password, storedPswd, (err, result) => {
            if (err) {
                console.log('Error while comparing')
            } else {
                if (result) {
                    console.log('Correct password')

                } else {
                    console.log('Incorrect password')

                }

            }
        })

    }
})