let div = document.querySelector('#mydiv')

let newElement = document.createElement('span');
newElement.textContent = "this is a new element"
div.insertAdjacentElement('beforebegin', newElement)