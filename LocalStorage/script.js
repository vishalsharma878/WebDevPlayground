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

    let obj = {
        name: userName,
        email: userEmail,
    };

    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem('my_obj', obj_serialized);
}

