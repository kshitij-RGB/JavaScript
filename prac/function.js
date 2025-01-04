//arrow function
const arrowSum = (a,b) => {
    console.log(a+b);
    
}

// console.log(arrowSum(3,4));

const arrowMul = (a,b) => {
    console.log(a*b);
    
}

// arrowMul(3,4);


const printHello  = () => {
    console.log("Hello There");
    
}

// printHello()


//----------------------------------------------------------------------//

// function countVowel (str){
//     let count = 0;
//     for(let char of str){
//         if(char=='a' || char == 'e' || char =='i'|| char=='o' || char=='u'||char=='A' || char == 'E' || char =='I'|| char=='O' || char=='U'){
//             count++;
//         }
//     }
//     return count;
    
// }

const countVowel = (str) =>{
    let count = 0;
    for(let char of str){
        if(char=='a' || char == 'e' || char =='i'|| char=='o' || char=='u'||char=='A' || char == 'E' || char =='I'|| char=='O' || char=='U'){
            count++;
        }
    }
    return count;
}

// console.log(countVowel("ApnaCollege"));


let arr = [1,2,3,4,5,6]
//for each loop can only be used for arrays not for strings
arr.forEach((num) => {
    // console.log(`The square of num ${num} is ${num*num}`);
})


let newArr = arr.map((num) =>{
    return num*2;
})
// console.log(newArr);

let filterArr = arr.filter((num)=>{
    return num%2 === 0;
})
//filter method filters arr and prints them into a new arr
// console.log(filterArr);


//reduce method reduces arr and prints the result

let sum =0;
let reduceArr = arr.reduce((num)=>{
    return sum +=num;
})
// console.log(reduceArr);
// console.log(arr);

arr = [100,500,400,50]

let result = arr.reduce((prev,curr)=>{
    return prev<curr ? prev:curr;
})

// console.log(result);

//---------------------------------------------------------------------//

let marks = [100,91,89.88,90,20,98,44]

let toppers = marks.filter((num)=>{
    return num>90;
})

// console.log(toppers);



let n = prompt("Enter a number: ")

let a = [];
for(let i=0;i<n;i++){
    a[i]=i+1;
}
console.log(a);
let res=0;
let sumOfArr = a.reduce((res,num)=>{
    return res+=num;
}) 
console.log(sumOfArr);

let mul = 1;
let mulOfArr = a.reduce((mul,num)=>{
    return mul*num;
})
console.log(mulOfArr);
