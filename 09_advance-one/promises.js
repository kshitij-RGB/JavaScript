// fetch('http://something.com').then().catch().finally()


const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Kshitij", 
            email:"kshitijsaxena2004@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Kshitij",
                password:"123"
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})


promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is handled"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript",
                password:"123"
            })
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()


