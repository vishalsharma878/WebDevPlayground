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

    let obj = {
        name: userName,
        email: userEmail,
        phone: userPhone
    };

    axios.post('https://crudcrud.com/api/ed307b10bfcb49d890d0f9982f0a1ef2/formData', obj)
        .then(res => console.log(res))
        .catch(err => alert(err));

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
// Append data 
function appendDataToList(Name, Email, Phone) {

    let data = document.createElement('li');
    data.appendChild(document.createTextNode(Name + ' ' + Email + ' ' + Phone));

    //Edit Button
    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function () {
        document.getElementById('name').value = Name;
        document.getElementById('email').value = Email;
        document.getElementById('phone').value = Phone;
        form.removeChild(data)

    });

    //Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.style.marginLeft = '1px';
    deleteButton.addEventListener('click', function () {
        form.removeChild(data);
    });


    data.appendChild(deleteButton); // Add the delete button to the li element
    data.appendChild(editButton);  //Add the edit button to the li element
    form.appendChild(data);
}


// Get Data
axios.get('https://crudcrud.com/api/ed307b10bfcb49d890d0f9982f0a1ef2/formData')
    .then(res => printData(res.data))
    .catch(err => alert(err));

function printData(obj) {
    for (let i = 0; i < obj.length; i++) {

        const d = obj[i];
        appendDataToList(d.name, d.email, d.phone);
    }
}







