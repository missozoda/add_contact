// Form elementlarini chaqirish
let elForm = $(".site-form");
let elNameInput = $("#name", elForm);
let elSurnameInput = $("#surname", elForm);
let elRelationInput = $("#relation", elForm);
let elNumberInput = $("#number", elForm);

// contact list ni chaqirish
let elContactList = $(".contact-list");

// arrays
let contacts = [];

// creat elements
let createLi = function(name, surname, relation, number){ 
  contacts.forEach(function(contact){
    let newLi = createElement("li", "mb-3");

    let newPName = createElement("p", "m-0 p-0 text-info fw-bold");
    let newSpanName = createElement("span", "fw-normal", contact.name);
    newPName.append("Name: ", newSpanName);

    let newPSurname = createElement("p", "m-0 p-0 text-info fw-bold");
    let newSpanSurname = createElement("span", "fw-normal", contact.surname);
    newPSurname.append("Surname: ", newSpanSurname);

    let newPRelation = createElement("p", "m-0 p-0 text-info fw-bold");
    let newSpanRelation = createElement("span", "fw-normal", contact.relation);
    newPRelation.append("Relation: ", newSpanRelation);

    let newPNumber = createElement("p", "m-0 p-0 text-info fw-bold");
    let newLinkNumber = createElement("a", "fw-normal text-info text-decoration-none", contact.number);
    newLinkNumber.setAttribute('href', `tel:+${contact.number}`)
    newPNumber.append("Number: ", newLinkNumber);


    newLi.append(newPName, newPSurname, newPRelation, newPNumber);
    elContactList.appendChild(newLi);
})}

// validator
let validator = function(name, surname, relation, number){
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
}

// inputni valuelarini tozalash
let clearInputs = function(){
  elNameInput.value = "";
  elSurnameInput.value = "";
  elRelationInput.value = "";
  elNumberInput.value = "";
}
//  formni eshitish
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let name = elNameInput.value.trim();
  let surname = elSurnameInput.value.trim();
  let relation = elRelationInput.value.trim();
  let number = elNumberInput.value.trim();

  validator(name, surname, relation, number);

  contacts.push({
    name,
    surname,
    relation,
    number
  })

  elContactList.innerHTML = null;
  createLi(name, surname, relation, number);
  clearInputs();
})




