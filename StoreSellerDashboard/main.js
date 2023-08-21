const form = document.getElementById('my_form');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    const item = document.getElementById('item').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    let obj = {
        Item: item,
        Description: description,
        Price: price,
        Quantity: quantity
    };

    axios.post('https://crudcrud.com/api/28789cc0f01e4bc986d25d519b7049f2/sellerDashboard', obj)
    .then(res => console.log(res))
    .catch(err => alert(err));

    itemsDashboard(item, description, price, quantity);
    location.reload();
    form.reset();
      
}

function itemsDashboard(item, description, price, quantity, id) {
  let li = document.createElement('li');

  li.appendChild(document.createTextNode(item + ' - ' + description + ' - ' + price + ' - ' + quantity + ' '));

  let button1 = document.createElement('button');
  button1.innerText = 'Buy1';
  let button2 = document.createElement('button');
  button2.innerText = 'Buy2';
  let button3 = document.createElement('button');
  button3.innerText = 'Buy3';

  let list = document.getElementById('list');

  li.appendChild(button1);
  li.appendChild(button2);
  li.appendChild(button3);

  list.appendChild(li);

  button1.addEventListener('click', function () {
    if (quantity > 0) {
      let newQuantity = quantity - 1;
      updateQuantity(id, newQuantity);
    }
  });

  button2.addEventListener('click', function () {
    if (quantity > 0) {
      let newQuantity = quantity - 2;
      updateQuantity(id, newQuantity);
    }
  });

  button3.addEventListener('click', function () {
    if (quantity > 0) {
      let newQuantity = quantity - 3;
      updateQuantity(id, newQuantity);
    }
  });

  function updateQuantity(id, newQuantity) {
    axios
      .put(`https://crudcrud.com/api/28789cc0f01e4bc986d25d519b7049f2/sellerDashboard/${id}`, {
        Item: item,
        Description: description,
        Price: price,
        Quantity: newQuantity,
      })
      .then((res) => {
        quantity = newQuantity; 
        printData(res.data);
      })
      .catch((err) => alert(err));
      location.reload(); 
  }
}

axios.get('https://crudcrud.com/api/28789cc0f01e4bc986d25d519b7049f2/sellerDashboard')
.then(res => printData(res.data))
.catch(err => alert(err+' Something Wet Wrong'));

function printData(data){
    for(let i =0; i<data.length; i++){
        
        let d = data[i];
        itemsDashboard(d.Item, d.Description, d.Price, d.Quantity, d._id);
    }
    
}
