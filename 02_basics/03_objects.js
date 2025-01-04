//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Kshitij",
    "full name" : "Kshitij Saxena",
    [mySym] : "mySym1",//used [] for sym representation
    age : 20,
    location : "Indore",
    isLoggedIn : "False"
}

// console.log(jsUser.name);
//or
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym])//print of symbol
//Object.freeze(jsUser)
jsUser.age = 21;
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello");
    
}
console.log(jsUser.greeting());
jsUser.greeting2 = function(){
    console.log(`Hello Js user , ${this.name}`);
    
}

console.log(jsUser.greeting2());





