const someForm = document.forms.someForm;
const target = document.getElementById('target');

someForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = someForm.name.value;
  const surnameValue = someForm.surname.value;
  const ageValue = +someForm.age.value;

  let obj = {nameValue, surnameValue, ageValue};

  // Виведення об'єкта в консоль
  console.log(obj);

  target.innerText = `Name: ${obj.nameValue}, Surname: ${obj.surnameValue}, Age: ${obj.ageValue}`;
});
