//step#1
/*
let obj={name:"Parkash",age:22}
console.log("Original object:");
console.log(obj.age);
console.log(obj.name);

obj={age:20,name:"Zain"};

console.log("Change order of properties in object ");
console.log(obj.age);
console.log(obj.name);

//obj={age:20,name:"Zain",sex:"male"};// error cannot be added new property
// obj={age:20};//error cannot reduce any property

*/
//step#2
//signature of ducktyping
/*
var myobj:{name:string,age:number};
 console.log(myobj);// undefined because above line create only signature not an object
  myobj={name:"pk",age:22};
  console.log(myobj);
  
  */
//step#3
/*var x: { foo: number };
//x = { foo: 1, baz: 2 };  // Error, excess property `baz`
x={foo:2};
console.log(x);

var y: { foo: number, bar?: number };
//y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`
y={foo:3};
console.log(y);
console.log(y.bar);//undefined
console.log(y.foo);
y={foo:322,bar:3423423};
console.log(y);*/
//step#4
/*var x: { foo: number };
//var x:{foo:number,baz:number,name:string};

var x1 = { foo: 1, baz: 2 };
//var x1 = { foo: "1", baz: 2 };//this line cause an error because doesn't follow signature
x = x1;
console.log(x.foo);
console.log(x1.foo);
console.log(x1.baz);
*/
//step#5
/*
var y: { foo: number, bar?: number };
 var y1 = { foo: 1, baz: 2 };
y = y1;*/
//step#6
//A type can include an index signature to explicitly indicate that excess properties are permitted:
/*var x: { foo: number, [x: string]: any };
x = { foo: 1, baz: 2 };  // Ok, `baz` matched by index signature
console.log(x);
console.log(x.foo+"\n"+x.baz);
*/
//step#7
/*var obj={name:"pk",age:22};
var obj1={name:"zain",age:23};
obj=obj1; //ok no error
console.log(obj.name+"\n"+obj.age);
*/
//step#8
/*var obj={name:"pk",age:22};
var obj2={age:23,name:"zain"};
//var obj2={age:23,full_name:"zain"}; // error mispelled property or exccess property
//order doesn't matter
obj=obj2;
obj2=obj;
console.log(obj.age+"\n"+obj2.age);*/
//step#9
/*var obj={name:"pk",age:22};
var obj2={age:23,name:"zain",sex:"male"};
obj=obj2; // ok
//obj2=obj//error
console.log(obj.name+obj.age+obj.sex);
*/
//step# Haashhh khtm ho he gaie duck-typing
var obj = { name: "pk", age: 33 };
console.log(obj);
obj["sex"] = "male";
console.log(obj);
console.log(obj.name + "\n" + obj.age + "\n" + obj.sex);
