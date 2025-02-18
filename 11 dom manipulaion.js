                      //****WINDOW OBJ**** {SBSE BDA, SRE FUN ISKE ANDR HEE ATE H} is GLOBAL OBJ
  //DOM,BOM,MATHS arr sb WINDOW OBJ K ande aate h 


//DOM(DOCUMENT OBJ MODEL)
//Html code -> js obj  => Document

//BOM(browser) {age achhe s pdhenge}




                      //dom {to change html}


        //(1)Access -> 3 ways {id,classname,tagname}
//document.getElementById('here')       SINGLE O/P
//document.getElementByClassName('cname')     MULTIPLE O/P 
//document.getElementByTagName('tname')       MULTIPLE O/P


//BUT  we know in css  #id , .class ,  tagname !
//So,
//   New thing {querySelector}

//document.querySelector(#withid);
//document.querySelector(.with class);
//document.querySelector(nothing just tag name);

// NOTE: It only return single O/P, first one
//TO RETURN ALL WE USE "querySelectorAll(#,.,)"



      //(2) Update ->4ways{innerHTML,outer HTml,textcontent,inner Text}
//(a) innerHTML s hm html content k get/set krte h 
//get->   let button = $0
//        button.innerHTMl;   //SRA html con print ho jaega
//set->   button.innerHTML = '<p>NEW </p>'   //sra isse replace ho jaega 


//(b) outerHTML is used to get/set the entire HTML element, including the element itself.

//  // get -> 
//  let button = document.querySelector(#id);
//  button.outerHTML;  // This will print the full HTML element, including the tag, in the console.

//  // set -> 
//  button.outerHTML = '<div><p>NEW content</p></div>';  // The entire button element will be replaced by the new HTML structure.


// (c) innerText is used to get/set the visible text content of an element, accounting for CSS styles (e.g., hidden text).
// get -> 
let button = $0;
button.innerText;  // This will return the visible text of the element, excluding any HTML tags and style-based hidden content.

// set -> 
button.innerText = 'NEW Text';  // This will replace the visible text inside the button with "NEW Text".


//(d) textContent is used to get/set all text content, including hidden text, without considering CSS styles.
 // get -> 
let button = $0;
button.textContent;  // This will return the text content of the element, including any hidden text (even if CSS hides it).

// set -> 
button.textContent = 'NEW Text';  // This will replace all the text content inside the button, including visible and hidden text, with "NEW Text".

// Key Differences:
// innerText: Returns only the visible text, considering the styles (like display: none, visibility: hidden, etc.). It is also sensitive to line breaks and formatting.
// textContent: Returns all text content, including hidden text (i.e., it ignores styles like display: none). It’s faster than innerText since it doesn’t take CSS into account.



                  //Creation
// let x = document.createElement('h1')
// x.textContent = 'This is newly Created Tag'



                    //Add Ele
//(1) appendChild()
//Ek parent tag assign hoga & uske end m append/add hoga assigned child tag
let x = document.createElement('h1')
x.textContent = 'This is newly Created Tag'

let btag = document.querySelector('body');
btag.appendChild(x);

//(2) insertAdjacentElement(position{4options}, html content)
//{beforebegin,afterbegin, begoreend, afterend} 
let y = document.createElement('h1')
y.textContent = 'This is newly Created Tag'

let divtag = document.querySelector('div');
btag.insertAdjacentElement("beforebegin",y);



                    //Removal
let parent = querySelector('#mydiv');
let child = querySelector('#fname');

parent.removeChild(child);
