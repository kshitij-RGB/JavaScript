let a = 69

if(true){
let a = 10
const b = 20
var c = 30
d = 40
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//-------------------------------------------------------------------------------//

function one(){
    name = "Kshitij";
    function two(){
        age = 20
        // console.log(name);
    }
    // console.log(age);
    
    two();
}

one()


//+++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1;
}


// console.log(addTwo(5)); //This creates an error

const addTwo = function (num){
    return num+2;
}


console.log(addTwo(5)); //This runs properly

