var fs = require('fs');

function async_cb(err, data) {
	if ( ! err ) {
		console.log( data.toString().split('\n').length - 1 );
	}
}

fs.readFile(process.argv[2],async_cb);