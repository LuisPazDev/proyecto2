let form = document.getElementById('form');
let inputFieldName = document.getElementById('name');
let inputFieldPhone = document.getElementById('phone');
let inputFieldSelector = document.getElementById('select');
let submit = document.getElementById('submit');

let arrayName = [];
let arrayPhone = [];
let arraySelector = [];

let name = '';
let phone = '';
let selector = '';

inputFieldName.addEventListener('change', function () {
    name = inputFieldName.value;
});
inputFieldPhone.addEventListener('change', function () {
    phone = inputFieldPhone.value;
});
inputFieldSelector.addEventListener('change', function () {
    selector = inputFieldSelector.value;
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputFieldName.value < 3)
    {alert('Invalid Name')}
    form.reset();
}); 


submit.addEventListener('click', function () {
    arrayName.push(name);
    arrayPhone.push(phone);
    arraySelector.push(selector);
    
    
    localStorage.setItem('name', arrayName);
    localStorage.setItem('phone', arrayPhone);
    localStorage.setItem('selection', arraySelector);  

    let list = document.createElement('div');
    let listName = document.createElement('p');
    let ListPhone = document.createElement('p');
    let listSelector = document.createElement('p');
    let buttonEdit = document.createElement('button');
    let buttonDelete = document.createElement('button');

    let dataName = localStorage.getItem('name');
    let dataPhone = localStorage.getItem('phone'); 
    let dataSelector = localStorage.getItem('selection');

    list.className = 'list';
    listName.innerHTML = dataName ;
    ListPhone.innerHTML = dataPhone;
    listSelector.innerHTML = dataSelector ;
    buttonEdit.innerText = 'Edit';
    buttonEdit.className = 'button_edit' ; 
    buttonDelete.innerText = 'Delete';
    buttonDelete.className = 'button_delete';


    list.appendChild(listName);
    list.appendChild(ListPhone);
    list.appendChild(listSelector);
    list.appendChild(buttonEdit);
    list.appendChild(buttonDelete);


    document.body.appendChild(list);
});
























