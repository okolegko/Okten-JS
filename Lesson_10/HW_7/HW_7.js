function addToLocalStorage(arrayName, objToAdd) {
  const array = JSON.parse(localStorage.getItem(arrayName) || '[]');
  array.push(objToAdd);
  localStorage.setItem(arrayName, JSON.stringify(array));
}

function addData() {
  const name = document.getElementById('nameInput').value.trim();
  const age = document.getElementById('ageInput').value.trim();
  if (name && age) {
    addToLocalStorage('sessionsList', { name, age: +age });
    displayData();
  }
}

function displayData() {
  const sessionsList = JSON.parse(localStorage.getItem('sessionsList') || '[]');
  const dataList = document.getElementById('dataList');
  dataList.innerHTML = sessionsList.filter(item => item.name && item.age).map(item =>
    `<li>${item.name}, Age: ${item.age}</li>`
  ).join('');
}

displayData();
