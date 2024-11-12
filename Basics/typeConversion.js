let number = 20
let stringNumber = String(number)
console.log("Number is changed to String "+stringNumber)
console.log(typeof(stringNumber));
console.log(typeof(number));

//  Operation Conversion
let num = 8
let negNum = -num
console.log(negNum);

let str1 = "Hi"
let str2 = " Raj"
let str3 = str1+str2
console.log(str3);


console.log(1 + "2")
console.log("1"+2);
console.log("1" + "2");

console.log(1 + 5 + "2")//first 1+5=6 then 6+"2" = 62
console.log("1"+ 5+ 2);//all in string 152
//    Always use parenthasis for the operations.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); /*The reason is that an equality check == and comparisons > < >= <= work differently.
                            Comparisons convert null to a number, treating it as 0. That's why 
                            (3) null >= 0 is true and (1) null > 0 is false.*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
// === is called strict check. It will also check data type. There will be no type conversion done.
/*  Primitive Data Types
        7 types--->String, Number(integer,float), Boolean, null, undefined, Symbol(used for making the value unique), BigInt

    Reference or Non-primitive data types
        Array, Objects, Functions
*/
const id = Symbol("123")
const anotherId = Symbol("123")
console.log("ID and AnotherId are not equal.");

console.log(id === anotherId)

const array = ["man","men","wise"]
console.log(array);

let myObject = {
    name: "Raj",
    age: 20
}
console.log(myObject);

const myFunction = function (){
    console.log("Hi Raj");
    
}
console.log(myFunction);
console.log(typeof myFunction);
console.log(typeof array);
