'use strict';
var http = require('http'),
    fs = require('fs');

var indexHtml = fs.readFileSync(('./index.html'));
var server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(indexHtml);

});
console.info('%s: Server listening on %s...', Date(Date.now()), 9000);
server.listen(9000);
