var bl = require('bl');
var http = require('http');

http.get(process.argv[2],ProcessData);

function ProcessData(response) {
	response.pipe(bl(OutputData));
}

function OutputData(err, data) {
	console.log(data.length);
	console.log(data.toString());
}