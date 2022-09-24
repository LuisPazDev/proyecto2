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
    
    localStorage.setItem('name', JSON.stringify(arrayName));
    localStorage.setItem('phone', JSON.stringify (arrayPhone));
    localStorage.setItem('selection', JSON.stringify (arraySelector));  

    let list = document.createElement('div');
    let listName = document.createElement('p');
    let ListPhone = document.createElement('p');
    let listSelector = document.createElement('p');
    let buttonEdit = document.createElement('button');
    let buttonDelete = document.createElement('button');

    let dataName = JSON.parse(localStorage.getItem('name'));
    let dataPhone = JSON.parse(localStorage.getItem('phone')); 
    let dataSelector = JSON.parse(localStorage.getItem('selection'));

    buttonDelete.addEventListener('click', function() {
        arrayName.splice(0, 1);
        localStorage.setItem('name', JSON.stringify(arrayName));
        arrayPhone.splice(0, 1);
        localStorage.setItem('phone', JSON.stringify(arrayPhone));
        arraySelector.splice(0, 1);
        localStorage.setItem('selection', JSON.stringify(arraySelector))
        list.remove();
    });

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




























