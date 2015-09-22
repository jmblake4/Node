var http = require('http');

http.get(process.argv[2],ProcessData);

function ProcessData(response) {
	response.on("data", function (data) { console.log(data.toString()) });
	response.on("error", function (data) { console.log(data.toString()) });
}