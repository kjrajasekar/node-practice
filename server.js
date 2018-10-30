var http = require('http');

var server = http.createServer((req, res) => {
    res.end('Hello World\n');

    
})

server.listen('3000');