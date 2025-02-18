//Dynamic nature : we can change/ update values of obj in runtime!

let obj = { age: 21, wt:70}

console.log(obj);

obj.color = "blue";  //run time m add kr diya

console.log(obj);


        //obj cloning  [wrong way]
let b = obj;
//WRONG ,Hmne bs ek new var b create kiya jo same reference obj
//ko point kr rha jise obj point krta h.

//cloning nhi h , bs ek new name s use kr skte!

                // 3 way to clone objs9