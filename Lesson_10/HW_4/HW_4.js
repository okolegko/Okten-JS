// Отримуємо збережене значення з localStorage або встановлюємо початкове значення 0
let currentNumber = +localStorage.getItem('number') || 0;

// Збільшуємо значення на 1
currentNumber += 1;

// Зберігаємо оновлене значення в localStorage
localStorage.setItem('number', currentNumber);

// Виводимо оновлену цифру в блок
document.getElementById('target').innerText = currentNumber;

