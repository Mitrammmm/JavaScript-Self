                            // ****Closure ****:
// A closure is when a function is able to access variables from its outer scope even after the outer function has finished executing.

// **Why is it significant?** 
// Closures allow functions to "remember" and use data from their outer scope, even after that scope is gone.
// This is useful in many cases like data privacy, callbacks, and function factories.

function outer() {
    let count = 0;  // Variable in outer scope
    function inner() {
      count++;  // Inner function accessing outer variable
      console.log(count);
    }
    return inner;  // Returns the inner function
  }
  
  const counter = outer();  
  counter();  // Output: 1
  counter();  // Output: 2
  // `counter` remembers the `count` variable due to closure.
  

  // **Does closure create a new copy or reference?** 
  // Closures keep a reference to the original variables, not a copy.
  // This means any changes made by the inner function affect the original variable in the outer scope.
  