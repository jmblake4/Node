var http = require('http');

function pad2(number) {
   return (number < 10 ? '0' : '') + number.toString();
}

function handleRequest(request, response){
	if ( request.url.indexOf('/api/parsetime?iso=') != -1 ) {
		var timeStr = request.url.slice(request.url.indexOf("=")+1);
		var dte = new Date(timeStr);
		var timeObj = { hour: dte.getHours(),
			minute: dte.getMinutes(),
			second: dte.getSeconds()
		};
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(timeObj));		
	}
	else if ( request.url == '/api/unixtime') {
		var dte = new Date();
		var timeObj = { unixtime: dte.getTime() };
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(timeObj));
	}
}
var server = http.createServer(handleRequest);

server.listen(process.argv[2], function(){
    console.log("Server listening on: http://localhost:%s", process.argv[2]);
});