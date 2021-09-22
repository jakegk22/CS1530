const express = require('express')
const path = require("path");

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','index.html'));
})
app.get('/style.css',(req,res) => {
    res.sendFile(path.join(__dirname,'..','style.css'));
})
app.get('/social_feed.html',(req,res) => {
    res.sendFile(path.join(__dirname,'..','social_feed.html'));
})
app.get('/feed.css',(req,res) => {
    res.sendFile(path.join(__dirname,'..','feed.css'));
})
app.get('/profile.html',(req,res) => {
    res.sendFile(path.join(__dirname,'..','profile.html'));
})
app.get('/profile.css',(req,res) => {
    res.sendFile(path.join(__dirname,'..','profile.css'));
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})