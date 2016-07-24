//step#1 // constant type
//const a:number; // error const variable must be initialize
var myname = "parkash";
var a = 2;
var bool = false;
//step#2 // any type
var variable = 2;
console.log("type of varibale: " + typeof (variable));
variable = "parkash";
console.log("type of varibale: " + typeof (variable));
variable = true;
console.log("type of varibale: " + typeof (variable));
variable = ["pakistan", "india"];
console.log("type of varibale: " + typeof (variable));
var b = variable;
console.log("type of variable: " + typeof (b));
//step#3
var data = { name: "parkash", age: 22 };
data = { name: "pk" }; // reduction allow in case of any
data = { name: "pk", age: 23, sex: "male" }; // addition allow in case of any
data = { address: "pib colony" };
data = "pk";
data = function () { console.log("Even a function can be assigned to any"); return 0; };
