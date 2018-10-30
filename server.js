var http = require('http');

var server = http.createServer((req, res) => {
    res.end('Hello World\n');

    // testing 2
})

server.listen('3000');