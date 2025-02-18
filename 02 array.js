//Reference type for storing onject,array and method inside array!!
//reference stack m store hota h & vo values heap m store hoti h!

let obj = {
    name: "mitra",
    "full name": "saumitra",
    age: 21,
    slogan: function(){
        console.log("Jagte Raho!!!")
    }
}

console.log(typeof(obj));
console.log(obj);

console.log(obj.slogan);
obj.slogan();

let obj2 = obj;  //shallow copy {no new data in heap, a new reference in stack 
//                   which points to same data in  heap}

//INTERVIEW QUE :  SHALLOW COPY vs DEEP COPY !!




//************ARRAY
//2 ways to create 

let arr = [1,2,true,"ohho"];
let brr = new Array(1,2,"mitramm",false,arr);

// console.log(typerof(arr));  //Object

//BUILDIN FUNCTIONs in Array : pop,push,shift,unshift,slice,splice,map,filter,
// reduce,sort,indexof,find

let arr2 = [1,2,3,4,5];

function allsum(arr){
    let sum = 0;
    arr.forEach((val)=>{
        sum = sum +val;
    })

    return sum;
}
let zx = allsum(arr2);
console.log("FOR EACH LOOP ",zx)