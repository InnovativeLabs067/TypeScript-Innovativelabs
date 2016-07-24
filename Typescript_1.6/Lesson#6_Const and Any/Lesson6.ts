//step#1 // constant type
//const a:number; // error const variable must be initialize
const myname:string="parkash";
const a=2;
const bool:boolean=false;


//step#2 // any type

let variable:any=2;
console.log("type of varibale: "+typeof (variable));
variable="parkash";
console.log("type of varibale: "+typeof (variable));
variable=true;
console.log("type of varibale: "+typeof (variable));
variable=["pakistan","india"];
console.log("type of varibale: "+typeof (variable));
let b=variable;
console.log("type of variable: "+typeof (b));

//step#3

let data:any={name:"parkash",age:22};
data={name:"pk"}// reduction allow in case of any
data={name:"pk" ,age:23, sex:"male"}; // addition allow in case of any
data={address:"pib colony"};

data="pk";
data=function():number{ console.log("Even a function can be assigned to any" );return 0;};