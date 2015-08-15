/*

HTTP UPPERCASERER
Exercise 12 of 13

Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and 
returns it to the client.

Your server should listen on the port provided by the first argument to your program.

*/

var http = require('http'); // Obtain the http module 
var port = process.argv[2]; // Obtain the port number from the provided arguments

var server = http.createServer(function(request, response){
	var toClient = ''; // This is the message we will return back to client

	// If the request method is post continue here 
	if (request.method == 'POST')
	{
		request.on('readable', function(){
			var chunk = null;
			if ((chunk = request.read()) !== null)
			{
				toClient += chunk.toString().toUpperCase();
			}
		});

		// Once the request has ended send information back the client
		request.on('end', function(){
			response.end(toClient);
		});
	}
	else
	{
		response.end('Send a post!\n'); // return this message to client if the method is not POST
	}
})

server.listen(port); // Make our server listen on the designated port number

