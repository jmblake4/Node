http = require('http');

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    res.writeHead(200);
    res.end(body.toUpperCase());
  });
}).listen(process.argv[2]);
