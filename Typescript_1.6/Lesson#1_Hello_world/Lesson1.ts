
//step#1
/*
console.log("lesson 1");
document.write("lesson1");
document.writeln("lesson1");

//In above all lines there is no error

console.log(2);
//document.write(2);// error, In ts its argument must be in the string form


//to overcome this prolem we can use to string method
 document.write((2).toString());
 
 */
 //step#2
 class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
class helo{
    public static main()
    {
        console.log('helo world');
       // return 2;// allow
       //return "helo"//allow   // All type of data it can return because return type is not mention here
        
    }
}
helo.main();