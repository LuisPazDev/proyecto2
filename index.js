let form = document.getElementById('form');
let inputFieldName = document.getElementById('name');
let inputFieldEmail = document.getElementById('email');
let inputFieldComment = document.getElementById('comment');
let submit = document.getElementById('submit');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputFieldName.value.length < 3){alert('Invalid Name')}
});  

let arrayName = []
let arrayEmail = []
let arrayComment = []

let name = ''
let email = ''
let comment = ''

inputFieldName.addEventListener('change', function () {
    name = inputFieldName.value;
})
inputFieldEmail.addEventListener('change', function () {
    email = inputFieldEmail.value;
});
inputFieldComment.addEventListener('change', function () {
    comment = inputFieldComment.value;
});

let data = localStorage.getItem('names'); 

submit.addEventListener('click', function () {
    arrayName.push(name);
    arrayEmail.push(email);
    arrayComment.push(comment);
    
    localStorage.setItem('names', arrayName);
    localStorage.setItem('emails', arrayEmail);
    localStorage.setItem('comments', arrayComment);  
});

submit.addEventListener('click', function () {
    let list = document.createElement('ul')
    let listItem = document.createElement('li');
    let buttonEdit = document.createElement('button');
    let buttonDelete = document.createElement('button');

    buttonEdit.innerText = 'Edit';
    buttonEdit.className = 'button_edit'  
    buttonDelete.innerText = 'Delete'
    buttonDelete.className = 'button_delete'

    listItem.appendChild(buttonEdit)
    listItem.appendChild(buttonDelete)
    list.appendChild(listItem)

    document.body.appendChild(list)

});






















