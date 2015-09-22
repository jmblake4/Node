var mymodule = require('./modules/filtered_ls_module.js');

mymodule(process.argv[2], process.argv[3], output);

function output(err, data) {
	for (var i=0;i<data.length;i++){
		console.log(data[i]);
	}
}