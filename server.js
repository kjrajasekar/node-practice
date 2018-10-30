var http = require('http');

var server = http.createServer((req, res) => {
    res.end('Hello World\n');

    // test
})

server.listen('3000');