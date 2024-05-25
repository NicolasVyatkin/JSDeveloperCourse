
var x = 6;
var y = 14;
var z = 4;

x += y - x++ * z ;

var rez = x;

document.write("x += y - x++ * z =" + ' ' + rez + "<hr>");

/*
assignment "… += …" (priority 2)
subtraction "… - …" (priority 12)
postfix increment "… ++" (priority 16)
multiplication "… * …" (priority 13)
*/

var x = 6;
var y = 14;
var z = 4;

z = --x - y * 5 ;

var rez = z;

document.write("z = --x - y * 5 =" + ' ' + rez + "<hr>");


/*
assignment "… = …" (priority 2)
prefix decrement "… -- …" (priority 15)
subtraction "… - …" (priority 12)
multiplication "… * …" (priority 13)
*/

var x = 6;
var y = 14;
var z = 4;

y /= x + 5 % z;

var rez = y;

document.write("y /= x + 5 % z =" + ' ' + rez + "<hr>");

/*
assignment "… /= …" (priority 2)
addition "… + …" (priority 12)
remainder "… % …" (priority 13)
*/

var x = 6;
var y = 14;
var z = 4;

z - x++ + y * 5;

var rez = z - x++ + y * 5;

document.write("z - x++ + y * 5 =" + ' ' + rez + "<hr>");

/*
subtraction "… - …" (priority 12)
postfix increment "… ++" (priority 16)
addition "… + …" (priority 12)
multiplication "… * …" (priority 13)
*/

var x = 6;
var y = 14;
var z = 4;

x = y - x++ * z;

var rez = x;

document.write("x = y - x++ * z =" + ' ' + rez + "<hr>");

/*
assignment "… = …" (priority 2)
subtraction "… - …" (priority 12)
postfix increment "… ++" (priority 16)
multiplication "… * …" (priority 13)
*/




