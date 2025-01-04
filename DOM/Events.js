let btn1 = document.getElementById("b1");
// btn1.onclick = () =>{
//     console.log("button was clicked");
    
// }

let div1 = document.getElementById("div");
// div1.onmouseover =() =>{
//     console.log("Mouse is inside div");
//     div1.style.backgroundColor = "blue";
    
// }

// div1.onmouseout =() =>{
//     div1.style.backgroundColor = "pink";
//     console.log("Mouse left the div");
    
// }


// btn1.addEventListener("click", () =>{
//     console.log("The button is clicked");
    
// } )

// div1.addEventListener("mouseover", () =>{
//     console.log("Mouse is inside div");
    
// })

let butt = document.getElementById("but");
let mode = "light";

butt.addEventListener("click", ()=>{
    if(mode === "light"){
        mode = "dark";
        document.body.setAttribute("class", "dark")        
    }
    else{
        mode  ="light";
        document.body.setAttribute("class", "light")        
    }
    console.log(mode);
    
})