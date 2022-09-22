let form = document.getElementById('form');
let inputFieldName = document.getElementById('name');
let inputFieldComment = document.getElementById('comment');
let submit = document.getElementById('submit');

let arrayName = [];
let arrayComment = [];

let name = '';
let comment = '';

inputFieldName.addEventListener('change', function () {
    name = inputFieldName.value;
});
inputFieldComment.addEventListener('change', function () {
    comment = inputFieldComment.value;
});


submit.addEventListener('click', function () {
    arrayName.push(name);
    arrayComment.push(comment);
    
    localStorage.setItem('names', arrayName);
    localStorage.setItem('comments', arrayComment);  

    let list = document.createElement('div');
    let listName = document.createElement('p');
    let listComment = document.createElement('p');
    let buttonEdit = document.createElement('button');
    let buttonDelete = document.createElement('button');

    let dataName = localStorage.getItem('names'); 
    let dataComment = localStorage.getItem('comments');

    list.className = 'list';
    listName.innerText = dataName ;
    listComment.innerText = dataComment ;
    buttonEdit.innerText = 'Edit';
    buttonEdit.className = 'button_edit' ; 
    buttonDelete.innerText = 'Delete';
    buttonDelete.className = 'button_delete';


    list.appendChild(listName);
    list.appendChild(listComment)
    list.appendChild(buttonEdit);
    list.appendChild(buttonDelete);


    document.body.appendChild(list);
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputFieldName.value.length < 3){alert('Invalid Name')}
});  























