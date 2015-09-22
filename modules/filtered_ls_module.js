module.exports = function( dir, ext, callback ) {
	var fs = require('fs');
	var path = require('path');
	fs.readdir(dir,function(err,list) {
		var matchingList = [];
		if (err) callback(err);
		else {
			for (var i=0;i<list.length;i++) {
				if ( path.extname(list[i]) == '.' + ext ) matchingList.push(list[i]);
			}
			callback(null,matchingList);
		}
	});
};