//Example 1: creating folder dynamically using multer
// const express = require("express");
// const app = express()
// const multer = require('multer')
// const fs = require('fs')
// fs.mkdir("./multerFile", () => {
//     console.log('file created')
// })
// console.log(__dirname)


//Example 2:creating/adding images folder dynamically using multer
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const new_path = path.join(__dirname, 'media')
console.log(new_path)
if (!fs.existsSync(new_path)) {
    fs.mkdir(new_path, () => {
        console.log('profile created')
    })
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, new_path) },
    filename: function (req, file, cb) { cb(null, file.originalname) }
})
const upload = multer({ storage: storage })
app.post("/data", upload.single('profile_pic'), (req, res) => {
    console.log(req.file)
    console.log(req.body.username)
    console.log(req.body.email)
    res.status(200).json({ message: 'Requested submitted successfully', profile_pic: req.file.originalname, username: req.body.username })

})
app.listen(3125, () => {
    console.log('server is running!')
})