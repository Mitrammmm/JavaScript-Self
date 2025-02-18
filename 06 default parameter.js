
function say(name){
    console.log("my name is ",name);
}
function sayname(name = "deafult name"){
    console.log("my name is ",name);
}

sayname("mitra");
sayname();

function say3(fname = "harsh", lname = fname.toUpperCase()){
    console.log("my name is ",fname + " "+ lname);
}

say3("mitra" , "singh");
say3("mitra");

say3();

//NOTE: obj and arr b pass kr skte  even functions

function say4(name = {age:21, wt:70, ht:180}){
    console.log("my name is ",name);
}
say4();

function ohho(){
    return "function as default ";
}

function say6(name = ohho()){
    console.log("my name is ",name);
}
say6();

//NOTE INTERIEW QUE

function say5(name = "mitram"){
    console.log("my name is ",name);
}
say5(null);           //null
say5(undefined);       //mitram        memorize output




