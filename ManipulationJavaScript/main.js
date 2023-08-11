
// const itemList = document.querySelector('#items');

// //parentNode

// // console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "f4f4f4";
// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'tomato';
// console.log(itemList.parentElement.parentElement);

// //childNodes
// //console.log(itemList.childNodes);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "pink";

// // console.log(itemList.firstChild);
// // console.log(itemList.firstElementChild);
// //itemList.lastElementChild.textContent ="4th item changed";

// //nextSibling
// // console.log(itemList.nextSibling)
// //nextElementSibling
// // console.log(itemList.nextElementSibling);

// //previousSibling
// // console.log(itemList.previousSibling);
// // console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "yellow";

// //creatElement

// let newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hi';
// newDiv.setAttribute('title', 'Hello Div');

// let newDivText = document.createTextNode('HEllo');
// console.log(newDiv);
// //Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// //Insert text in Document
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = "20px";

//  //new div element
// let newText = document.createElement('div');
// let textHello = document.createTextNode("HEllo");
// newText.appendChild(textHello);

// let group = document.querySelector('#items'); 
// let firstItem = group.querySelector('li');   

// //Insert the new div element before the first li element
// group.insertBefore(newText, firstItem);

// A
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form Submit event
form.addEventListener('submit', addItem);
 itemList.addEventListener('click', removeItem);
 filter.addEventListener('keyup', filterItem);
//Add Item
function addItem(e){
    e.preventDefault();
    //get input value

    let newItem = document.getElementById('item').value;
    let descrption = document.getElementById('descr').value
    //console.log(newItem);
    //create new List
    let li = document.createElement('li');
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem+ ' '+descrption));

    let delBtn = document.createElement('button');
    //black btn
    let editBtn = document.createElement('button');

    delBtn.className ='btn btn-danger btn-sm float-right delete';
    editBtn.className ='btn btn-success btn-sm float-right';
    editBtn.style.marginLeft = '3px';

    editBtn.appendChild(document.createTextNode('edit'));
    delBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(editBtn); //edit button
    li.appendChild(delBtn);

    itemList.appendChild(li);
    
    
}

//remove item function
function removeItem(e){ 
    if(e.target.classList.contains('delete')){
       if(confirm('Are you Sure?') ){
        let li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}
// Filter Item
function filterItem(e){
  //convert text to lowerCase
  var text = e.target.value.toLowerCase(); 
  //get List
   let items = itemList.getElementsByTagName('li');
   //convert into array
   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';   
     }
     else{
        item.style.display ='none';
     }
   });
}

console.log(itemList);