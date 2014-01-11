// this displays "hello world" at 
// http://localhost:8888/ and http://127.0.0.1:8888/

// var http = require('http');

// var server = http.createServer(function (request, response) 
// 	{response.writeHead(200, {'Content-Type': 'text/plan'}); 
// 	response.write('Hello World/n');
// 	response.end()})

// server.listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');

// REFACTORED CODE BELOW

var http = require('http');

function onRequest(request, response) {
	console.log("Request received.");
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log('server has started.');
