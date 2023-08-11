let form = document.getElementById('my-form');

form.addEventListener('submit', storeData);

//Adding key value pair to the local storage

// function storeData(e){
//     e.preventDefault();

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     localStorage.setItem(name, email);

// } 

//Add object in local storage

function storeData(e) {
    e.preventDefault();

    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;
    let conta = document.getElementsByClassName('container');

    let data = document.createElement('li');
    data.appendChild(document.createTextNode(userName+ ' ' +userEmail+ ' ' +userPhone));
    
    form.appendChild(data);
    
    let obj = {
        name: userName,
        email: userEmail,
        phone: userPhone
    };

    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem(userEmail, obj_serialized);
}

