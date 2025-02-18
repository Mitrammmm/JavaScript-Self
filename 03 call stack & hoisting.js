//****************HOISTING: 2 TYPES 
// -> Scope shifts to the top of their scope!
// Variable (var keyword)  & Function

// Var m khali var k scope ata h while function me poora function with return type and all

console.log(age);
var age = 21;

add(5,4);
function add(a,b){
    console.log(a+b);
}

//NOTE: 
// let & const & function expression THESE DONT HAVE HOISTING CAPABIITY!

// console.log(roll);  //reference error!
let roll = 361;

//Even class dont have hoisting capability

// let obj = new animal();    //reference error!
class animal{

}




//**********CALLSTACK
//Stack use hota h execution ordering store krne k liye!!
//Similar jo recursion m pdha h A( b(c()) ) -> stack m A thn B then C aega anda C->b->a execute hoga







//Question -> Why fUCTIONS r called First Class Citizen?
// coz we can assign fun to var, return fun ko ,fun  as argument use kr skte h,
// , fun ko array me insert kr skte, even mny properties use kr skte h functions k