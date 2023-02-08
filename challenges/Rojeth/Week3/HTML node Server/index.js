const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');

const server = http.createServer((request, response) => {

    let filename = "index.html";
    let contentType = "text/html";
    // if the client is requesting style.css, we'll serve it instead

    if (request.url === "/style.css") {
        filename = "style.css";
        contentType = "text/css";
    }
    fs.readFile(filename, function (err, content) {
        if (err) {
            // readFile will return an error if it was unable to successfully read the content
            //if this happen, let's return an error response back from the server
            response.statusCode = 500;
            response.end(`Could not serve ${filename}`);
        }
        else {
            // if there is no error, we'll serve the HTML we read from the file!
            response.statusCode = 200;
            response.setHeader('Content-Type', contentType);
            response.end(content);
        }
    });
});

server.listen({port : 3000, host: 'localhost'}, function() {
    console.log('Server is running');
})