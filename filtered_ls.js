var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],sort_results);

function sort_results( err, list ) {
	var file_ext = '.' + process.argv[3];
	for (var i=0;i<list.length;i++) {
		if ( path.extname(list[i]) == file_ext ) console.log(list[i]);
	}
}