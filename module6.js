/*
	MAKE IT MODULAR (Extension to modular.js)
	Exercise 6 of 13

	You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, 
	the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to 
	your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to 
	make your filter work.

	The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, 
	the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list 
	of files, as an Array. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, 
	as the first argument.
*/

var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback)
{

	var extension = "." + fileExt;
	var results;

	fs.readdir(dirName, function(error, dataList){
		if (error)
		{
			callback(error, null);
		}
		else
		{
			results = [];
			for (var i = 0; i < dataList.length; i++)
			{
				if (path.extname(dataList[i]) == extension)
				{
					results.push(dataList[i]);
				}
			}
			callback(null, results);
		}

	});
};

