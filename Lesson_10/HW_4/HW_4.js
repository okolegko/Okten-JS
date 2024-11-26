let currentNumber = +localStorage.getItem('number') || 0;

currentNumber += 1;

localStorage.setItem('number', currentNumber);

document.getElementById('target').innerText = currentNumber;

