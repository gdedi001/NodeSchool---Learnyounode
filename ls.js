/*

FILTERED LS
Exercise 5 of 13

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory 
name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. 
Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

*/

// Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names 
// of the files in the directory excluding '.' and '..'.

var fs = require('fs');
// add "." so that we can accurately tell if 
var extension = "." + process.argv[3];

fs.readdir(process.argv[2], function(error, list) {
	
	for (var i = 0; i < list.length - 1; i++)
	{
		if (list[i].slice(-extension.length) === extension)
		{
			console.log(list[i]);
		}
	}
});