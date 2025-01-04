// let element = document.querySelector("h2")

// element.innerText = element.innerText + " from Kshitij";

// console.log(element.innerText);

//------------------------------------------------------

// let divs = document.querySelectorAll(".box")
// // divs[0].innerText = "Value 1"
// // divs[1].innerText = "Value 2"
// // divs[2].innerText = "Value 3"

// let idx = 1;
// for(div of divs){
//     div.innerText = `value ${idx}`
//     idx++;
// }



//-------------------------------------------------


// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// console.log(div.style);
// div.style.backgroundColor = "pink"

// let nb1 = document.createElement("button");
// nb1.innerText = "Append";
// let nb2 = document.createElement("button");
// nb2.innetText= "Helloooo";
// div.append(nb1);
// div.after(nb2);


//---------------------------------------------------------

// let newBtn = document.createElement("button");
// newBtn.innerText = ("click me");
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white"
// document.body.prepend(newBtn);

//-------------------------------------------------------
let para = document.querySelector("p");

// para.setAttribute("class", "newClass") //this does not works as it overrides the previos class

para.classList.add("newClass"); //classList adds multiple classes to a element
console.log(para.getAttribute("class")) 


