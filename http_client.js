/*

HTTP CLIENT
Exercise 7 of 13

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String 
contents of each "data" EVENT from the response to a new line on the console (stdout).

*/

var http = require('http');
var url = process.argv[2];

// The response object is a Node Stream object. You can treat Node Streams as objects that emit events. The three events that 
// are of most interest are: "data", "error" and "end".
http.get(url, function(response) {

	// The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.
	response.on('data', function (data) {
		console.log(data.toString()); // Must explicitly convert to Strings
	});

	response.on('error', function(error) {
		console.error(error.message);
	});
});