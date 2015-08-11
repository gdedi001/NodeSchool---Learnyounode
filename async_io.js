/*

MY FIRST ASYNC I/O!
Exercise 4 of 13

Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains 
to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

*/

var fs = require('fs'); // "import" the file system module from node

/* 

fileContents will contain the contents of process.argv[2]. This is essentially a Buffer Object. Buffer objects are Node's way of efficiently 
representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply 
calling the toString() method on them (see line 27).

*/
fs.readFile(process.argv[2], function(error, fileContents){
	if (error)
	{
		console.log("There was an error: " + error);
	}
	console.log(fileContents.toString().split('\n').length - 1);
});