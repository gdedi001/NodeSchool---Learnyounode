/*

HTTP FILE SERVER
Exercise 11 of 13

Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. 
You must use the fs.createReadStream() method to stream the file contents to the response.

*/

var http = require('http'); // Obtain http module
var fs = require('fs'); // Obtain filesystem (fs) module

var port = process.argv[2]; // port provided in arguments
var file = process.argv[3]; // text file to be served

// Create http server
var server = http.createServer(function(request, response){
	
	var newFile = fs.createReadStream(file); // Create read stream of our provided file
	newFile.pipe(response); // output of newFile becomes the input of response  
})

// Listen to provided port
server.listen(port);

