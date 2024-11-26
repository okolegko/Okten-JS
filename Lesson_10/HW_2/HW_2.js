const submitButton = document.getElementById('submit-age');

submitButton.onclick = function () {
  const ageInput = document.getElementById('age');
  const message = document.getElementById('message');
  const age = parseInt(ageInput.value);

  // Перевірка на числове значення та вік менший за нуль
  if (isNaN(age)) {
    message.textContent = "Please enter a valid number.";
  } else if (age < 0) {
    message.textContent = "Age cannot be negative.";
  } else if (age < 18) {
    message.textContent = "You are under 18!";
  } else {
    message.textContent = "You are 18 or older.";
  }
};
