//step#1 union_types
//union types are custom data_types can hold more than two types of data , '|' pipe symbol use to define data_types

/*let a:string|number|boolean|number[]=[3];
if(typeof a=="string")
{
    console.log("variable is a string type and its value is: "+a);
}
else if(typeof a=="number")
{
    console.log("variable is a number type and its value is: "+a);
}
else if(typeof a=="boolean")
{
    console.log("variable is a bool type and its value is: "+a);
}
else if(typeof a=="object")
{
    console.log("variable is a object_array type and its value is: "+a[0]);
}*/

//step#1.1
/*function addWithUnion(arg1: string | number | boolean, arg2: string | number | boolean): string | number | boolean {
    if (typeof arg1 === "string") {
       
        return arg1 + "is a string";
    }
    if (typeof arg1 === "number") {
        // arg1 is treated as a number here
        return arg1 + 10;
    }
    if (typeof arg1 === "boolean") {
        // arg1 is treated as a boolean here
        return arg1 && false;
    }
}

var result=addWithUnion("pk",3);
console.log(result);*/


//step#2 types aliases
/*
 aliases is one of the most important concept it is similar to union type
but there is a bit difference between two*/

/*
type string_number_bool=number|string|boolean;
//now string_number_bool is a datatype which hold three types of data
//let a:string_number_bool;
let aliase_type:string_number_bool;
aliase_type=1;
console.log(aliase_type);
aliase_type=false;
console.log(aliase_type);*/


//step#3
type CallbackWithString = (string) => string;
function usingCallback(f: CallbackWithString)
{
    f("This is a string")
    {
        return f;
    };
}


/*function callback( function(f:string):void
{
    f
})
 */