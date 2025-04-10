const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Sample database (array for simplicity)
let users = [];

// Middleware to validate username
const usernameValidator = (req, res, next) => {
    let { username } = req.body;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Allows letters, numbers, and underscores (3 to 15 chars)

    if (!username || username.trim() === "") {
        return res.status(400).send("Username should not be empty");
    }
    if (!usernameRegex.test(username)) {
        return res.status(400).send("Invalid username format. Use 3-15 characters (letters, numbers, underscores)");
    }
    next();
};

// Middleware to validate email
const emailValidator = (req, res, next) => {
    let { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || email.trim() === "") {
        return res.status(400).send("Email should not be empty");
    }
    if (!emailRegex.test(email)) {
        return res.status(400).send("Invalid email format");
    }
    next();
};

// Middleware to validate password
const passwordValidator = (req, res, next) => {
    let { password } = req.body;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least 1 letter & 1 number

    if (!password || password.trim() === "") {
        return res.status(400).send("Password should not be empty");
    }
    if (!passwordRegex.test(password)) {
        return res.status(400).send("Invalid password format. Minimum 8 characters, at least 1 letter and 1 number.");
    }
    next();
};

// Middleware to validate login credentials
const userCredentialsValidator = (req, res, next) => {
    let { username, email, password } = req.body;

    if ((!username && !email) || !password) {
        return res.status(400).send("Username/Email and Password are required");
    }

    const user = users.find(
        (user) =>
            (user.username === username || user.email === email) &&
            user.password === password
    );

    if (!user) {
        return res.status(401).send("Invalid credentials");
    }
    next();
};

// Signup Route
app.post("/signup", usernameValidator, emailValidator, passwordValidator, (req, res) => {
    users.push(req.body);
    res.send("Successfully registered");
});

// Login Route
app.post("/login", userCredentialsValidator, (req, res) => {
    res.send("Login successfully");
});

// Start Server
app.listen(3100, () => {
    console.log("Server is running on port 3100");
});
