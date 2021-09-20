var http = require('http');
var fs = require('fs');
var path = require("path");

var indexHTML
var styleCSS
var feedCSS
var profileCSS
var profileHTML
var socialfeedHTML 

fs.readFile(path.join(__dirname,'..','index.html'),function(err,data) {
    if (err){
        throw err;
    }
    indexHTML = data;
})  
fs.readFile(path.join(__dirname,'..','style.css'),function(err,data) {
    if (err){
        throw err;
    }
    styleCSS = data;
}) 
fs.readFile(path.join(__dirname,'..','profile.css'),function(err,data) {
    if (err){
        throw err;
    }
    profileCSS = data;
})
fs.readFile(path.join(__dirname,'..','profile.html'),function(err,data) {
    if (err){
        throw err;
    }
    profileHTML = data;
})
fs.readFile(path.join(__dirname,'..','feed.css'),function(err,data) {
    if (err){
        throw err;
    }
    feedCSS = data;
}) 
fs.readFile(path.join(__dirname,'..','social_feed.html'),function(err,data) {
    if (err){
        throw err;
    }
    socialfeedHTML = data;
}) 


var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/style.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(styleCSS);
            break;
        case "/feed.css":
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(feedCSS);
        case "/profile.css":
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(profileCSS);
        case "/profile.html":
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(profileHTML);
        case "social_feed.html":
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(socialfeedHTML);
        default :    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(indexHTML);
    }
    response.end();
});

//Listen on port 8000, IP defaults to 127.0.0.1
server.listen(3000);


console.log("Server running at http://127.0.0.1:22/");