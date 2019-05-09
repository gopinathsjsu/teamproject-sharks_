const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const origin = "http://localhost:3000"
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



app.post("/login", (req, res) => {
    console.log(req.body)
    //authentication
    res.json({ message: "success"})
})

app.post("/signup", (req, res) => {
    console.log(req.body)
    //authentication
    res.json({ message: "success"})
})

app.get("/profile", (req, res) => {
    res.send("Get profile data")
})

app.get("/menu", (req, res) => {
    res.send("Get menu data")
})

app.get("/cards", (req, res) => {
    res.send("Get user cards")
})

app.get("/orders", (req, res) => {
    res.send("Get user orders")
})

app.listen( port, () => console.log("Server started on port ", port))
