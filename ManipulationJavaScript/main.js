const itemList = document.querySelector('#items');

//parentNode

// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "f4f4f4";
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'tomato';
console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "pink";

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
itemList.lastElementChild.textContent ="4th item changed";

//nextSibling
// console.log(itemList.nextSibling)
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "yellow";

//creatElement

let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hi';
newDiv.setAttribute('title', 'Hello Div');

let newDivText = document.createTextNode('This Document is Manipulated by JavaScript');

//Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
//Insert text in Document
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "20px";

console.log(newDiv);

