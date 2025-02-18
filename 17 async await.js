                        //****await*****
// await async codeko sync k trh run krata h as
// untill vo async code run n ho jae further lines k execution nhi hoga.

//it makes JavaScript wait for the Promise to resolve and return the result 
// before proceeding to the next line of code. 

//NOTE: ASYNC FUN HMESHA PROMISE RETURN KRTA H 
//NOTE: ASYNC AWAIT PROMISES K HANDLE KRNE K LIYE US HOTA H

sync code;
await-> async code;   //phle ye poora resolve/reject-> return aega then next line execution start hoga     
sync code;


                        //****async function**** */
async function getdata(){
    setTimeout( function ()=>{
        console.log("async fun h")
    }, 3000);
}

getdata();

//***NOTE: await can only be used inside async functions!!!! */



                            //**FETCH API** */
//API ->
//STEPS
// API ENDPOINT/URL   ->  SYNC
// FETCH DATA   ->  ASYNC{USE AWAIT}      {await us krte otherwise bina fetch kiye next line execute hone lgegi with undefined value}
// PROSESS DATA ->  SYNC

//ALSO use fetch keyword to ftch apis an urls

async function fetchapi(){

    let respons = await fetch('url aega');
    let data = await Response.json();
    console.log(data);
}
fetchapi();



                //****API/URL GET & POST requests */
//code on utube cnl