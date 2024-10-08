var http = require('http');

http.createServer(function (req, res) {
    // writeHead is the method to set the HTTP status code
    res.writeHead(200, {'Content-Type': 'text/html'});
    // This method sends the response body and signal that the response is complete
    res.end('Hello World!');
}).listen(8080); // This is the port definition, localhost:8080