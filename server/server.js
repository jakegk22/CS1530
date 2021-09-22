const express = require('express')
const path = require("path");
const fs = require('fs');
const http = require('http');

const app = express()
const port = 3000

var indexHTML
var styleCSS
var feedCSS
var profileCSS
var profileHTML
var socialfeedHTML 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','index.html'));
})
app.get('/style.css',(req,res) => {
    res.sendFile(path.join(__dirname,'..','style.css'));
})
app.get('')
  
  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})