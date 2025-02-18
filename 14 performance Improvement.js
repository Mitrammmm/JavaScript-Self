//TO return time taken

let t1 = performance.now();   //curr time stamp!

//code

let t2 = performance.now();

console.log("Time taken to run code is ", (t2 - t1));


                //reflow & repaint
//(1) reflow : Process of calculating position & dimention of an element
// time taking & computationally intensive task!

// e.g-> for loop me br br new  'p' bnao and use each loop m body.appendChild kro
// hr 'p' k liye hr loop m chln pdta h

//(2) repaint: process of displaying content/element pixel by pixel
// Faster

//eg for loop m body k jgh ek phle div bna lo and usme append krdo {jldi jldi draw ho jaega}
// finally div k body m append krdo!

//NOTE: less no of reflow & repaints  more the performance



                    //Document Fragement {light weight doc obj}
// append of document directly takes 1 reflow and 1 repaint
//but on docu fragment , 0 reflow and 0 repaint

//So, append on document fragment and at last append doc frag into document
// which only takes 1 reflow and 1 repaint

let fragment = document.createDocumentFragment();
for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para" + (i+1);
    //Below Line, 0 reflow & 0 repaint!!
    fragment.appendChild(para);
}

document.body.appendChild(fragment);  // Only 1 reflow & 1 repaint
