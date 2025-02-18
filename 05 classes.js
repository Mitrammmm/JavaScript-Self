//Class is a blueprint & obj is instance of class

class Animal{
    //properties
    age = 221;    //Default Public 
    #marks = 99;  // Private bn gya 

    //behaviour
    running(){
        console.log("i am running", this.#marks,);
        // Private k access krne k liye this.
    }

    speaking(){
        console.log("speaking");
    }

}

let obj = new Animal();

console.log(obj.age);
// console.log(obj.#marks);

obj.running();

                     //****Get and Set */
// Class k andr private var/fun k access and modify krne k liye use hita h

//Class is a blueprint & obj is instance of class

class Animal2{
    age = 221;    //Default Public 
    #marks = 99;  // Private bn gya 

    running(){
        console.log("i am running", this.#marks,);
        // Private k access krne k liye this.
    }

    #speaking(){
        console.log("speaking");
    }

    get fetchpvt(){
        return this.#marks; 
    }

    set modifypvt(val){     // parametrized always 
        this.#marks = val;        
    }

}

let obj2 = new Animal2();
// console.log(obj2.modifypvt(88));
console.log("Get and Set",obj2.fetchpvt);

                 //Constructor
class Animal3{
    //properties
    age = 221;    //Default Public 
    #marks = 99;  // Private bn gya 

    constructor(newag , newmk){
        this.age = newag;
        this.#marks = newmk;
    }

    //behaviour
    running(){
        console.log("i am running", this.#marks,);
        // Private k access krne k liye this.
    }

    speaking(){
        console.log("speaking");
    }

}

let obj3 = new Animal3(19, 100);
console.log("constructor",obj3.age);
console.log(obj3.running());

