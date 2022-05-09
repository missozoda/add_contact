// Form elementlarini chaqirish
let elForm = document.querySelector(".site-form");
let elNameInput = elForm.querySelector("#name");
let elSurnameInput = elForm.querySelector("#surname");
let elRelationInput = elForm.querySelector("#relation");
let elNumberInput = elForm.querySelector("#number");

// contact list ni chaqirish
let elContactList = document.querySelector(".contact-list");

// arrays
let contacts = [];

let createLi = function(name, surname, relation, number){
  for (let i = 0; i < contacts.length; i++) {
    let newLi = document.createElement("li");

    let newPName = document.createElement("p");
    let newSpanName = document.createElement("span");
    newPName.setAttribute('class','m-0 p-0 text-info fw-bold');
    newSpanName.setAttribute('class', 'fw-normal')
    newSpanName.textContent = contacts[i].name;
    newPName.append("Name: ", newSpanName);

    let newPSurname = document.createElement("p");
    let newSpanSurname = document.createElement("span");
    newPSurname.setAttribute('class','m-0 p-0 text-info fw-bold');
    newSpanSurname.setAttribute('class', 'fw-normal')
    newSpanSurname.textContent = contacts[i].surname;
    newPSurname.append("Surname: ", newSpanSurname);

    let newPRelation = document.createElement("p");
    let newSpanRelation = document.createElement("span");
    newPRelation.setAttribute('class','m-0 p-0 text-info fw-bold');
    newSpanRelation.setAttribute('class', 'fw-normal')
    newSpanRelation.textContent = contacts[i].relation;
    newPRelation.append("Relation: ", newSpanRelation);

    let newPNumber = document.createElement("p");
    let newLinkNumber = document.createElement("a");
    newPNumber.setAttribute('class','m-0 p-0 text-info fw-bold');
    newLinkNumber.setAttribute('class', 'fw-normal text-info text-decoration-none')
    newLinkNumber.setAttribute('href', `tel:+${contacts[i].number}`)
    newLinkNumber.textContent = contacts[i].number;
    newPNumber.append("Number: ", newLinkNumber);


    newLi.setAttribute('class', 'mb-3')
    newLi.append(newPName, newPSurname, newPRelation, newPNumber);
    elContactList.appendChild(newLi);
  }
}

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let name = elNameInput.value.trim();
  let surname = elSurnameInput.value.trim();
  let relation = elRelationInput.value.trim();
  let number = elNumberInput.value.trim();

  if (name == "" || name.length < 3 || name.length > 25) {
    elNameInput.setAttribute('class', 'border-bottom border-danger');
    return
  }else{
    elNameInput.setAttribute('class', 'border-0 border-bottom border-info border-1');
  }

  if (isNaN(Number(number)) || number == "" || number.length < 9 || number.length > 15){
    elNumberInput.setAttribute('class', 'border-bottom border-danger');
    elNumberInput.setAttribute('autofocus', 'on');
    return
  }else {
    elNumberInput.setAttribute('class', 'border-0 border-bottom border-info border-1');
    elNumberInput.setAttribute('autofocus', 'off');
  }

  contacts.push({
    name,
    surname,
    relation,
    number
  })


  elContactList.innerHTML = null;
  createLi(name, surname, relation, number);
})




