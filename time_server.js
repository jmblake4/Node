var net = require('net');
var server = net.createServer(SendDate);
server.listen(process.argv[2]);

function pad2(number) {
   return (number < 10 ? '0' : '') + number.toString();
}

function SendDate(socket) {
	var dte = new Date();
	var year = dte.getFullYear().toString();
	var month = pad2(dte.getMonth()+1);
	var day = pad2(dte.getDate());
	var hour = pad2(dte.getHours());
	var minute = pad2(dte.getMinutes());
	
	var outDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
	socket.end(outDate);
}