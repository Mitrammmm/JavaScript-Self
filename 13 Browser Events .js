//BrowserEvents!!!
// Events can be click, doubleclick, key pressed , up key,down key ,scroll etc..,
// There an action attatched with these events like double click to like etc..,


// Clicked on resume btn to play video
// Event -> click
// Event-Target -> resume btn
// Event-Listener -> Action/Behaviour {video play hua}


                    //EventListner
//    element.addEventListner( 'event type', 'function -> action' );
//Element .addEventListener as well .removeEventListner b hota h to remove it.
let fname = document.getElementById('name');
fname.textContent = "mitra";

function changename(){
    fname.textContent = "Saumitra";
}

fname.addEventListener('click',changename);
fname.removeEventListener('click',changename);   //EVENT AND FUN NEED TO BE SAME TO REMOVE

//OR
fname.addEventListener('click', function changename{
    fname.textContent = "Saumitra";
});

//NOTE: here we cant remove by using above syntax  as both act as diff objs
// SO above syntax nt advviced t use when removal is required anywhere!



                            //Phases of an Event
 // (1)Capturing Phase (2) At Target Phase (3) BubblingPhase
 //By default ,addEventListner  BubblingPhase me kaam krta hai

 //to pass addEventListner in CApturing phase we use to pass useCapture as true
 Element.addEventListener('click','function', true);




                            //Event Object
// Jb bhi koi event trigger hota h like button clicked,
//then event as a parameter addEventListner m chla jta h &
// hm us event obj k print b kra skte h
let letname = document.getElementById('name');
fname.textContent = "singh";

function changename(event){
    console.log(event);
}

fname.addEventListener('click',changename);



                            //Default Action 
//addEventListner can b used to change default action on tags/...

let anchor = document.getElementById('anchorTag');
anchor.addEventListener('click', function(event){
    event.preventDefault();          //fun->prevent default actions
    anchor.textContent = 'Click nahi hoga, HAHAHA!!!'   //ab default m y print hoga
})



                    //How DOMContentLoaded is used to add script dynamically !!??