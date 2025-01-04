// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email : "xyz@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Kshitij",
            lastname: "Saxena"
        }
    }
}
// console.log(regUser.fullname);

// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 3:"b"}
const obj2 = {2:"c", 4:"d"}
const obj6 = {}

// const obj3 = Object.assign(obj6,obj1, obj2)//the first location {}acts as the target for the assign method
// console.log(obj6);
// console.log(obj3==obj6);

const obj3 = {...obj1,...obj2}//... stands for spread oper
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//Important as it returns value in array that can be looped , etc.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "webdev",
    price  : 999,
    student : "Kshitij"
}

// course.coursename

const {coursename: cn} = course //renameing long names by shorter ones
console.log(cn);//this is known as destructuring of objects

// const navbar = ({company}) => { //destructuring


// }

// navbar(company = "Neyoo")


//This is a format of an API
// {
//     "name" : "Kshitij",
//     "age" : "20",
//     "price" : "free"
// }
//This is an array format of an API
// [
//     {},
//     {},
//     {}
// ]