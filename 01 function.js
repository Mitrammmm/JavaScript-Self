//**************"function" keyword !!!!   definition
function name(){
    console.log("mitra")
}

name(); //fun call

function printsum(a,b){ //PARAMETERS
    console.log("Sum is : ",a+b)
}

printsum(7,3);    //ARGUMENTS





//***********RETURN FUNCTION!!

function threesum(a,b,c){
    return a+b+c;            //func call k bd store ho jaega
}

// threesum(1,2,3); //NO outpur , store t krao return function h
let x = threesum(1,2,3);
console.log("Return Value is : " + x);






//*********** FUNCTION EXPRESSION */
const multi = function(a,b){       // let or var or const
    // console.log(a*b);  //  OR
    return a*b;
}

console.log(multi(4,5));






//***********ARROW FUCTION */
let expone = (a,b) =>{
    console.log(`${a} Power ${b} is : `, a**b);          //a**b == a power b!!
}

expone(2,10);

const greet = (name) =>{
    // console.log( " Hello, $(name) !!")
    return ( ` Hello, ${name} !!`);
}

let xx = greet("ethen");
console.log(xx);




//NOTE
//In JavaScript, string interpolation 
// (template literals) is done using backticks ( ), not double or single quotes



// (1)Normal Function (function keyword):
// When to use: Use it when you need a standard function definition that can be called in different places of your code.
// Example: Defining general-purpose functions like name() and printsum()

// (2)Return Function:
// When to use: Use it when you need to return a value from the function (such as a sum, calculation, or result).
// Example: Functions like threesum() that compute and return a result.

// (3)Function Expression:
// When to use: Use it when you want to assign a function to a variable or use it as an anonymous function.
// Example: Functions like multi() which are created and stored in variables.

// (4)Arrow Function:
// When to use: Use it for concise function expressions, especially when working with short, one-liner functions or when maintaining lexical this.
// Example: Functions like expone() and greet() are good candidates for arrow functions.

