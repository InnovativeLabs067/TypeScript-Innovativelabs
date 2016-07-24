//syntax
//let array_name:datatype[]=[];
//let array_name:Array<datatype> = [1, 2, 3];//alternative correct syntax
//step#0.0
/*let ary:number[]=new Array(1,4);
console.log(ary[0]);
ary[0]=<any>"pk";
console.log(ary[0]);
*/
//step#0
/*let ary:Array<number>=[1,2,3,4];
ary[0]="pk";//error
*/
//step#1
/*let mixed_array=[1,"string",true,["abc"],{}]; //mixed array as in js
for(let i=0;i<mixed_array.length;i++)
{
    document.write("mixed array: "+mixed_array[i]+"<br>");

}
document.write(typeof mixed_array+"<br>");
document.write("array="+mixed_array[3]+"<br>");
document.write(""+2);
//note this is an interesting thing.you can pass number in document.write() method by concate with empty string
*/
//step#2
/*let number_array:number[]=[1,3];
number_array.push(5,6);
//number_array.push("string");//error because array type is number
console.log(number_array);*/
//step#3 associative array
/*let asso_array:string[]=["dfe"];
asso_array["educated people"]=40;
asso_array["illiterate people"]="heloworld";
asso_array["good people"]=true;
asso_array["Intermediate people"]=50;
console.log("asso_arraY: "+asso_array["good people"]);
*/
/*let ass_number:number[]=[];
ass_number["Even"]="2";
ass_number["Odd"]="3";
console.log(ass_number["Even"]);*/ 
