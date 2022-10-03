let nameUser = document.getElementById("userName");
let age = document.getElementById("age");
let indexForm = document.getElementById("indexForm");

function myFocusName () {
  document.getElementById("userName").style.backgroundColor = 'rgb(175, 244, 244)';
};
function myBlurName () {
  document.getElementById("userName").style.backgroundColor = 'white';
};

function myFocusAge () {
  document.getElementById("age").style.backgroundColor = 'rgb(175, 244, 244)';
};
function myBlurAge () {
  document.getElementById("age").style.backgroundColor = 'white';
};

const addUserInfo = () => {
    if (validation()) {

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    if (indexForm.value === ''){
        if (userInfo === null) {
        userInfo = [];
        }
        const newUser = {
        name: userName.value,
        age: age.value,
        };
        userInfo.push(newUser);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
        userInfo[indexForm.value].name = userName.value;
        userInfo[indexForm.value].age = age.value;
        document.getElementById('btnAction').innerText='Add'
        document.getElementById('btnAction').style.backgroundColor='rgb(27, 222, 222)';
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    clearForm();
    showTable();
    }
};

const showTable = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo === null) {
    userInfo = [];
  }
  document.getElementById("tbodyTablet").innerHTML = "";
  let row = "";
  userInfo.forEach((element, index) => {
    row += `<tr id="tr">
                    <td class="td-name">${element.name}</td>
                    <td class="td-age">${element.age}</td>
                    <td>
                    <button class="btn-edit" onClick="edit(${index})">Edit</button>
                    <button class="btn-delete" id="btnDelete" onClick="deleteItem(${index})">Delete</button>
                    </td>
                </tr>
            `;
  });
  document.getElementById("tbodyTablet").innerHTML = row;
};

const clearForm = () => {
  userName.value = "";
  age.value = "";
  indexForm.value = "";
};

const validation = () => {
  if (userName.value === "") {
    alert("Invalid Name");
    return false;
  }
  if (age.value === "") {
    alert("Invalid Age");
    return false;
  }
  return true;
};

const edit = (index) =>{
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userName.value = userInfo[index].name;
    age.value = userInfo[index].age;
    indexForm.value = index;
    document.getElementById('btnAction').innerText='Edit';
    document.getElementById('btnAction').style.backgroundColor='rgb(248, 187, 75)';
}

const deleteItem = (index) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));  
  userInfo.splice(index,1);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  window.location.reload();
};


showTable();


