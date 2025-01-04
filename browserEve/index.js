// let firstpara = document.getElementById('fpara');

// function changeText(event){
//     console.log(event);
    
//     firstpara.textContent = "Hello Kshitij"
// }


// firstpara.addEventListener('click', changeText); //by deafult bubbling phase

// // firstpara.removeEventListener('click', changeText)

// let ae = document.getElementById('fanchor');

// ae.addEventListener('click', function(event){
//     event.preventDefault(); //to stop default event
//     ae.textContent = "Click ho gaya";
    
// });


// let paras = document.querySelectorAll('p');

// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You have clicked para : "+ (i+1))
//     })
// }

// let paras = document.querySelectorAll('p');

function alertPara(event){
    if (event.target.nodeName ==='SPAN') { //if want to alert span element only
        alert("You have clicked on "+ event.target.textContent);  
    }
    //alert("You have clicked on "+ event.target.textContent);
}

// for(let i=0;i<paras.length;i++){
//     paras[i].addEventListener('click',alertPara);
// }


let mydiv = document.getElementById('div')

document.addEventListener('click',alertPara)