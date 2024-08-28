const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    let statusCode = 200;

    switch (filename) {

        case './':
            filename = "./index.html";
            break;

        case './about':
            filename = "about.html";
            break;

        case './contact-me':
            filename = "contact-me.html";
            break;

        default:
            filename = "./404.html"
            statusCode = 404;
            break;
    }

    fs.readFile(filename, function (err, data) {
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);