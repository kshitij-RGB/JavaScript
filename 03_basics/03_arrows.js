const user = {
    name:"Kshitij",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.name}, welcome to web`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.name="Riya"
// user.price=899
// user.welcomeMessage()

// console.log(this);

//---------------------------------------------------------------
function one(){
    // console.log(this);
    let name = "Kshitij"
    console.log(this.name);
    
    
}


//one()


//--------------------------------------------
 
const func = () => {
    let name = "Kshitij"
    console.log(this.name);
    
}

func()//


//---------------------------------------------------------------

// const addTwo = (num1,num2) => {
//     return (num1+num2);
// }

// console.log(addTwo(3,5));



// const addTwo = (num1,num2) => (num1+num2);

// const addTwo = (num1,num2) => num1+num2;

const addTwo = (num1,num2) => ({username : "Kshitij"});

console.log(addTwo(3,5));

