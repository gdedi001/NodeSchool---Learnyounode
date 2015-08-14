/*

TIME SERVER
Exercise 10 of 13

Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. 
For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the (net) 
module from Node core which has all the basic networking functions.

The net module has a method named net.createServer() that takes a callback function. Unlike most callbacks in Node, 
the callback used by createServer() is called more than once. Every connection received by your server triggers another 
call to the callback. The callback function has the signature:

    function callback (socket) { / ... / }

*/

var net = require('net');
var port = process.argv[2];
var date = new Date();

// This function is used to manipulate all instances of date to fit the zero-filled requirement
function fixNumber(number)
{
	if (number < 10)
	{
		return "0" + number;
	}
	else
	{
		return number;
	}
}

// The socket object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, 
// in that it can be both read from, and written to.
var server = net.createServer(function(socket){

	// Use socket.write(data) to write data to the socket
	// Use socket.end() to close the socket or socket.end(data)

	// 1 is added to the month because January is month 0, thus returning one less than the actual month number
	socket.write(date.getFullYear() + '-' + fixNumber(date.getMonth() + 1) + '-' + fixNumber(date.getDate()) + ' ' + 
		fixNumber(date.getHours()) + ':' + fixNumber(date.getMinutes()) + '\n');
	socket.end();

}).listen(port);
