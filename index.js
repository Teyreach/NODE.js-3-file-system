var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, files) {
	if (err) throw err;
	console.log('W katalogu, znajdują się następujące pliki/foldery: ');
	console.log(files);
	fs.appendFile('./', '123.txt', function(err, file){
			console.log('Dołączono plik: "123.txt"');
		});	
	fs.writeFile('./123.txt', files, function(err, data) {
		if (err) throw err;
		console.log('Dane zapisane do pliku.');
	});
});