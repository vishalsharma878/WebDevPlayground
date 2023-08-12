let form = document.getElementById('my-form');

form.addEventListener('submit', storeData);

//Adding key value pair to the local storage

// function storeData(e){
//     e.preventDefault();

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     localStorage.setItem(name, email);

// }

function storeData(e) {
    e.preventDefault();

    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;

    let data = document.createElement('li');
    data.appendChild(document.createTextNode(userName + ' ' + userEmail + ' ' + userPhone));
    //Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.style.marginLeft='1px';
    deleteButton.addEventListener('click', function() {
        localStorage.removeItem(userEmail);
        form.removeChild(data);
    });

    data.appendChild(deleteButton); // Add the delete button to the li element
    form.appendChild(data);

    let obj = {
        name: userName,
        email: userEmail,
        phone: userPhone
    };

    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem(userEmail, obj_serialized);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}




    

