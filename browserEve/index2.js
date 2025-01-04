//code 1
const t1 = performance.now()
for (let index = 0; index < 10000; index++) {
    let para = document.createElement('p');
    para.textContent = "This is a para " +(index+1);
    document.body.appendChild(para);
}

const t2 = performance.now()

console.log("total time by code 1: "+(t2-t1));


//code 2

const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i=0;i<10000;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para '+(i+1);
    mydiv.append(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();
console.log(t4-t3);


//best code

const t5 = performance.now();
let fragment = document.createDocumentFragment();

for (let i = 0; i <10000; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para "+ (i+1);
    fragment.appendChild(para);//this line takes 0 repaint and 0 reflow
}
//below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);
const t6 = performance.now();00
console.log(t6-t5);

