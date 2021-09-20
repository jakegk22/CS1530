var http = require('http');
var fs = require('fs');
var path = require("path");

var htmlFile;
var cssFile;
fs.readFile(path.join(__dirname,'..','index.html'),function(err,data) {
    if (err){
        throw err;
    }
    htmlFile = data;
})  
fs.readFile(path.join(__dirname,'..','style.css'),function(err,data) {
    if (err){
        throw err;
    }
    cssFile = data;
}) 


var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/style.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(cssFile);
            break;
        default :    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlFile);
    }
    response.end();
});

//Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);


console.log("Server running at http://127.0.0.1:22/");