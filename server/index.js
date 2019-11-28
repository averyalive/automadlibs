// start server here

var http = require('http');
const portNum = 7000;

function fetcher(wordType) {
    // call SQL server function to find a word with that type
    // return that word
}

function handler(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(fetcher(request));
}

var server = http.createServer(handler);

server.listen(portNum);
console.log("Server running on port " + portNum);