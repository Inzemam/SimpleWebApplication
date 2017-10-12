/**
 * http://usejsdoc.org/
 */
console.log("Hi Welcome to Node.js  Hello World");
var d = new Date();
console.log("Current Date is: " + ("0" + (d.getDate() + 1)).slice(-2)+"/"+("0" + (d.getMonth() + 1)).slice(-2)+"/"+d.getFullYear());
console.log("Current Time is: "+ d.getHours() + ":" + d.getMinutes() + ":"  + d.getSeconds());