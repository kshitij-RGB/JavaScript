// let name = prompt("Enter your name");

// console.log(name.length);

// let username  = `@${name}${name.length}`
// console.log(username);

let alpha = ['A','B','C','D','E','F'];

// for (let i = 0; i < alpha.length; i++) {
//     console.log(alpha[i]);
     
// };

// for(let letter of alpha){
//     console.log(letter.toLowerCase());
    
// }

let price = [250,645,300,900,50];
for(let i=0;i<price.length;i++){
    price[i]=price[i]*0.9;
}
price.pop();

// console.log(price);
// price.push(100,200,300);
// price.shift()
// console.log(price);
// price.unshift(0)
// console.log(price);
// 

let arrNew = alpha.concat(price)
// console.log(arrNew);


let newArr = [1,2,3,5,6];
console.log(newArr);

let sliceArr = newArr.slice(0,3);
// console.log(sliceArr);
// console.log(newArr);

let spliceArr = newArr.splice(3,0,4);
// console.log(spliceArr);
console.log(newArr);


