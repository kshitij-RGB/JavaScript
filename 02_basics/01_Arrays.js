//Arrays
const myArr = [0,1,2,3,4,5]
const myHeros = ["Ironman","Hulk"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr)

//array methods

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(0) //adds element to the 0th index of the array
// console.log(myArr)
// console.log(myArr.includes(9)) //returns boolean
// console.log(myArr.indexOf(0))
// const newArr = myArr.join() //Converts array into string
// console.log(newArr)

console.log("A",myArr);
const sliceArr = myArr.slice(1,3);
console.log(sliceArr);
console.log("B", myArr);
const spliceArr=myArr.splice(1,3);
console.log(spliceArr);
console.log("C",myArr);


