                    //*****Promise*****
// An object which is used to rn async codes
//It allow async methods t return values just like sync methods;
// instead of returning the final value, it returns a promise to supply the value at 
// some point in future!

// promise is in 1 of the states:
// (1)PENDING
// (2)Resolve/fULFILLED
// (3)Rejected

let firstpromise = new Promise( (resolve,reject)=>{
    // console.log("sync code noramlly chlegaa");

    setTimeout(function say(){
        console.log("async starting m pending state then fulfilled m aega");
    }, 10000);

    //resolve();   //m aisa krke b promise k state change kr skta!!
    //reject() ;
});

                        //***then & catch *****
// promise fulfilled then kuchh karana hoto -> .then
// promise rject ho jae and kuchh krana hoto -> .catch

let promise1 = new Promise((resolve,reject)=>{
    let flag = true;
    if(flag) resolve("Resolve ho gya!!")
    else reject("yar reject ho gya!!")
} )

// promise1.then().catch()   SYNTAX
promise1.then( (messageJoResolveKAndrPassHoga)=>{
console.log("RESOLVE MSG IS : ",messageJoResolveKAndrPassHoga )
}).catch((ERRORJoRejectMPassHoga)=>{
    console.log("REJECT MSG IS:", ERRORJoRejectMPassHoga);
} )

//NOTE: Can use multiple togethere!!
promise1.then().then().then().catch().catch().catch();

                        

                        //*****finally()*****
// reject hoya resolve , finally  chlega hee chlega
promise1.then().then().then().catch().finally( (msgJoBHuaUska)=>{
    consol.log("hmesha Chlega", msgJoBHuaUska);
})



                        //**** Promise.all**** */
let p1 = new Promise( (resolve,reject)=>{
    setTimeout(resolve, 2000 , "aise b use kr skte");
});
let p2 = new Promise( (resolve,reject)=>{
    setTimeout(resolve, 4000 , "ye print hoga 4 sec bd");
});
let p3 = new Promise( (resolve,reject)=>{
    setTimeout(resolve, 5000 , "buri buri");
})

Promise.all([p1,p2,p3]).then().catch();
//isme all(array k form m jta)
//.then()-> Promise.all TB RESOLVE HOGA JB ISKE ARE PROMISES RESOLVED STATE M HOGE
// .catch()->  JITNE REJECT HOTE VO SRE ISEM RUN HOTE H!{NO NEED K SRE REJECT HO}



                        //question
//if we send 0 in settime out funcion(),
// does it become sync or keeps being async code + how does it run? 

//Answer
// When you send 0 as the delay in setTimeout(), it doesn't make the code synchronous.
//  It still runs asynchronously, but it gets scheduled to run as soon as the JavaScript 
// call stack is empty, meaning it will run after any currently executing code finishes.