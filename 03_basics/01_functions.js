function sayMyName(){
    console.log("Kshitij is here");
    
}

// sayMyName()


// function add2Nums(n1,n2){
//     console.log(n1+n2);
    
// }

const a =20
// console.log(typeof a);

function add2Nums(n1,n2){
    // console.log(n1+n2);
    // return (n1+ Number(n2));//Number is used as a example for typeconversion
}

const result = add2Nums(5,"9");
// console.log("Result ",result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in...`
}

// console.log(loginUserMessage("Kshitij"));

//-----------------------------------------------------------------------------------//

function calCartPrice(...num1){
    return num1;
}

// console.log(calCartPrice(200,400,500));


const user = {
    name : "Kshitij",
    age : 20
}
const user1 = {
    name : "Riya",
    age : 21
}
function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(user1);

handleObject({
    name : "Rishabh",
    age : 20
})

function returnArr(arr){
    return arr[1]
}

console.log(returnArr([200,400,600]));

function productOfArr(...arr){
    console.log(arr);
}

console.log(productOfArr(2,4,6));
