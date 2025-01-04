//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Kshitij",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(heros);

//-----------------------------------------------
//Stack (Primitive), Heap (Non-Primitive\)


let myName = "Kshitij Saxena"
let anotherName = myName
anotherName = "Betu"

console.log(myName);
console.log(anotherName);



let user1 = {
    email: "betu@gmail.com",
    upi: "ksh@123"
}

let user2 = user1

user2.email = "ksh@gmail.com"
console.log(user2.email);
console.log(user1.email);


//Note: In stack memory, the data is stored in stack and whereas in heap memory the name is stored in stack which provides an referece to the heap memory for the objects.

