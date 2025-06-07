let name = "ashish"
const pi = 3.14


// primitive data types
let n = 23;  // Number
let s = "hello" // String
let b = true // Boolean
let nothing = null  // in daily life we call this null data type but actually in js it is Object data type
let und = undefined  // Undefined
let symbol = Symbol()   // Symbol data type used in react concepts

console.log(typeof nothing)
console.log(typeof symbol)


// objects
// Js everything is object 

obj = {
    name: "ashish",
    age: 32
}

// in the form of key and values

courses = {
    ids: [123, 24, 434,535],
    names: ["Physics", "chem", "maths", "bio"]
}



// data conversion 
let num = "139"
let converted_num = Number(num)
console.log(converted_num);
console.log(typeof converted_num);   // Number


//
let num1 = "139a"
let converted_num1 = Number(num1) 
console.log(converted_num1);  // NAN --- not a number
console.log(typeof converted_num1); 


let num2 = '23'
let num4 = +num2  // technique to change data types

console.log(num4);

let num5 = parseInt(num2)  // technique to change the data types


let str = 133

console.log(String(str))
console.log(JSON.stringify(str))

// Arithematic operations


str.to