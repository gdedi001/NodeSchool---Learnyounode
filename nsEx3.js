/*

 MY FIRST I/O!
 Exercise 3 of 13

Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains 
to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument. You do not need to make your own test file.

*/

var fs = require('fs');

var fileName = process.argv[2];

//console.log(process.argv); see the contents of the nodeschool's provided argument

var contents = fs.readFileSync(fileName); // This method will return a Buffer object containing the complete contents of the file.

/* 
Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary 
or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them.
*/

contents = contents.toString();

console.log(contents.split("\n").length-1);



