let form = document.getElementById('form');
let inputFieldName = document.getElementById('name');
let inputFieldEmail = document.getElementById('email');
let inputFieldComment = document.getElementById('comment');
let submit = document.getElementById('submit');

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


submit.addEventListener('click', function () {
    arrayName.push(name);
    arrayEmail.push(email);
    arrayComment.push(comment);
    
    localStorage.setItem('names', arrayName);
    localStorage.setItem('emails', arrayEmail);
    localStorage.setItem('comments', arrayComment);  

    let list = document.createElement('ul')
    let listName = document.createElement('li');
    let listEmail = document.createElement('li');
    let listComment = document.createElement('li');
    let listItem = document.createElement('li'); 
    let buttonEdit = document.createElement('button');
    let buttonDelete = document.createElement('button');

    let dataName = localStorage.getItem('names'); 
    let dataEmail = localStorage.getItem('emails');
    let dataComment = localStorage.getItem('comments');


    listName.innerText = dataName
    listEmail.innerText = dataEmail
    listComment.innerText = dataComment
    buttonEdit.innerText = 'Edit';
    buttonEdit.className = 'button_edit'  
    buttonDelete.innerText = 'Delete'
    buttonDelete.className = 'button_delete'


    listItem.appendChild(listName)
    listItem.appendChild(listEmail)
    listItem.appendChild(listComment)
    list.appendChild(listItem)
    listItem.appendChild(buttonEdit)
    listItem.appendChild(buttonDelete)


    document.body.appendChild(list)
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputFieldName.value.length < 3){alert('Invalid Name')}
});  























