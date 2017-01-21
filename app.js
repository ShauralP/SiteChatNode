
var os = require("os");

//read database file
var fs = require("fs");
function readFile() {
	var text = fs.readFileSync("text.txt", "UTF-8");
	console.log("this is the read text:" + text);
	return text;
}

//Write String to database file
function writeFile(a) {
	fs.appendFile("text.txt", a);
	fs.appendFile("text.txt", os.EOL);
}


//recieve POST
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );

app.post('/storedata', function (req, res) {
	// var full = req.body.ip + "-" + req.body.id + "-" + req.body.time + "-" + req.body.message;
	var full = req.body.id + "-" + req.body.name + "-" + req.body.message;
	// var full = req.params;
	console.log(req.body);
	// console.log(full);
	writeFile(full);
	res.send(readFile());
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

//ping app that data has changed
app.get('/getdata', function (req, res) {
	res.send(readFile());
})