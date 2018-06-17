var http = require("http");
var fs = require('fs');

//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {
	var url = request.url;
	switch(url) {
		case '/':
		    getPageFile(response, 'C:/Users/JamesHammerel/Documents/Websites/Node Server/home.html');
			break;
		default:
		    response.end();
			break;
	}
   
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')

function getPageFile(response, filepath) {
	fs.readFile(filepath, function(error, data) {
		if (error) {
			response.writeHead(500, {'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if (data) {
		    response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
}