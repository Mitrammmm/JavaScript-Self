            //***** Variable(var let const) Scoping : 3 types (global,function,block)


//(1)Gloabl Scope
let age = 21; //let or const 
// ye hr fun, block , loop, condition me accessible h !

//(2)Function Scope {only inside function}
function uff(){
    let abc = "mitra";
}
// console.log(abc);  //ReferenceError: abc is not defined

//(3)Block Scope
// var k in as well outside block 
// but let and const l only inside {} scope h!
console.log(qw); //undefined
{
    var qw = 21;
    let w = "mitramm";
}
console.log(qw); // 21
// console.log(w);  //ReferenceError: w is not defined


            //***Temporal Dead Zone */
//as let const use kiya and define krne s phle hee use jiya t "reference error" aati h


console.log(zx);
console.log("aaa");       // as zx not accessible h to niche k 3 lines b run nhi hogi  !
console.log("zzz");       // So, Ye poora Temporal Dead Zone bn gya h
console.log("xx");

let zx = 32;
console.log("ghghhhhg");
