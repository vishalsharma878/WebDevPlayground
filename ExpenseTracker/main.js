const form = document.getElementById('my-form');

form.addEventListener('submit', storeData);

function storeData(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    let obj = {
        email: email,
        amount: amount,
        description: description,
        category: category
    }

    let s = JSON.stringify(obj);
    localStorage.setItem(email, s);

    appendDataToList(email, amount, description, category);

    form.reset();
}

// Function to append data to the list
function appendDataToList(email, amount, description, category) {
    let li = document.createElement('li');
    li.innerHTML = `
        <strong>Email:</strong> ${email}, 
        <strong>Amount:</strong> $${amount}, 
        <strong>Description:</strong> ${description}, 
        <strong>Category:</strong> ${category}
    `;

    // Delete button
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Delete'))
    button.addEventListener('click', function () {
        form.removeChild(li);
        localStorage.removeItem(email);
    });

    // Edit button
    let edit = document.createElement('button');
    edit.innerText = 'Edit';
    edit.addEventListener('click', function () {
        document.getElementById('email').value = email;
        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('category').value = category;
        form.removeChild(li);
        localStorage.removeItem(email);
    });

    li.appendChild(button);
    li.appendChild(edit);

    form.appendChild(li);
}

// Load saved entries for all users on page load
for (let i = 0; i < localStorage.length; i++) {
    let email = localStorage.key(i);
    let savedData = localStorage.getItem(email);

    if (savedData) {
        let parsedData = JSON.parse(savedData);
        appendDataToList(email, parsedData.amount, parsedData.description, parsedData.category);
    }
}
