let form = document.getElementById('my-form');

form.addEventListener('submit', storeData);

function storeData(e){
    e.preventDefault();
   
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    localStorage.setItem(name, email);

}