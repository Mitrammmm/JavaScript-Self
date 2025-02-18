                                // CSS 
// (1) style.
let x = document.getElementById('#id');
x.style.backgroundColor = 'blue';
x.style.color = 'blue';

//Drawback: ek br m ek hee property aati h!


// (2) .cssText;
// update/change/display all css {inline} prop.
let y = document.getElementById('#id');

y.style.cssText;  //get all prop
y.style.cssText = "Background-color:blur; color: white; padding: 2rem;"


// (3) htmltagjismenewattributeaddkrnah.setAttribute( id/class/style/... , uski value)
//agr vo attribute already present h to
//  vo replace ho jta & purana data lost h jta h

let z = document.querySelector(".divclass");

z.setAttribute('style',"bg:white; color:black");
z.setAttribute('class','classname');
z.setAttribute('id','idname');



// (4) .className
// display all class names + {set} updates{replaces} with new class name(s);

let qw = document.querySelector('#id2');
qw.className;   //get all cnames
qw.className = "c1 c2 c3 c4 c5";



// (5) .classList
//className: dback k replace hee ho jta sidhe
//classList -> add,remove,toggle,contains

let we = document.getElementById('45');
we.classList; //display all cnames in array format
we.classList.add('newclass');
we.classList.remove('newclass');

we.classList.toggle('fclass');  //if present vo gyb ho jaegi & next toggle m wps a jaegi use m
we.classList.contains('newclass');   //bool-> true/false