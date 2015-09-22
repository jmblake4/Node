var bl = require('bl');
var http = require('http');
var arg_index = 2;

http.get(process.argv[arg_index],ProcessData);

function ProcessData(response) {
	response.pipe(bl(OutputData));
}

function OutputData(err, data) {
	console.log(data.toString());
	if ( ++arg_index < 5 ) http.get(process.argv[arg_index],ProcessData);
}