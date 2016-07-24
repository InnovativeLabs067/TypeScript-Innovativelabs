//step#1 union_types
//union types are custom data_types can hold more than two types of data , '|' pipe symbol use to define data_types
function usingCallback(f) {
    f("This is a string");
    {
        return f;
    }
    ;
}
/*function callback( function(f:string):void
{
    f
})
 */ 
