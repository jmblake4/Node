var sum = 0;
for (var i=2; i<process.argv.length; i++) {
	var sum = sum + Number(process.argv[i]);
}
console.log(sum.toString());