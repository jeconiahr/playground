var http = require('http');
var dt = require('../myfirstmodule');

http.createServer(function (req, res) {
    // writeHead is the method to set the HTTP status code
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    // This method sends the response body and signal that the response is complete
    res.end();
}).listen(8080); // This is the port definition, localhost:8080