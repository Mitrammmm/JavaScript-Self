//sync code
//Code which runs immediately as their num comes.

console.log("mitra");    //runs immediately
console.log("singh");  // '' 
console.log("hahha");     //''

//async code
// Code which doesnt run immediately as their num comes

console.log("hi");
setTimeout(fun(),6000);    //doesnt run immediately

//issue
console.log("hi");
setTimeout(fun(),6000);    
console.log("waiting");  // doesnt run waiting k upr wla kb run hoga {blocked}

//So, we need t handle async codes differently!

                    


                        //*****Event Loops******
// used t handle async codes!
// Components -> CallStack , Browser , Callback Queue

// 1. Call Stack
// - The Call Stack keeps track of function calls.
// - Functions are added to the stack when invoked and removed when execution finishes.
// - If the stack is empty, the event loop starts looking at the callback queue.

// 2. Browser (or Web API)
  // - Handles tasks like DOM manipulation, network requests, and timers (setTimeout, setInterval).
  // - Once these tasks are completed, the browser passes them to the callback queue for further processing.

// 3. Callback Queue (or Task Queue)
// - Holds callback functions that need to be executed once the call stack is empty.
// - When the call stack is clear, the event loop moves tasks from the callback queue to the call stack for execution.


                //togethere Working
// 1 When a function is executed, it’s added to the call stack.
// 2 If a task is asynchronous (e.g., setTimeout, network request), the browser handles it and moves the callback to the callback queue when finished.
// 3 The event loop constantly checks if the call stack is empty. If so, it moves a task from the callback queue to the call stack for execution.
// This keeps JavaScript from blocking the main thread, allowing asynchronous code to run without interrupting the user experience.

