//2 types
// Compile time: ynatx error,s turn a jae
// console.log[x];

//Run time : run krne k bd
// console.log(unknownvar);




        //****Error Handling
try{ //code jisme error a skta h

    console.log("first");
    console.log(x);
    //Jaise hi error aata hai, try block ke baaki code ko skip kar diya jata hai.
    console.log("Last"); 

}
catch(err){  //jo b 1st error aega use 'e' var m store kr liya!
           // yha define krro error k sth krna ky h
    console.log("error k jgh ye aaya h!");
    console.log("error is:" , err);
}

finally{
    //error aae y n aae, ye hmesha last me chlega
    console.log("finally block at last");
}


                        //***throw
// khud k error bnane k liye hota h!
//Error obj bna k use krte h 

let errcode = 420;
if(errcode == 420){
    throw new Error("Dhokebaz");
}

try{
    console.log(errrrcodeeee);
}
catch(error){
    throw new Error("yha b use ho skta h ");
}


