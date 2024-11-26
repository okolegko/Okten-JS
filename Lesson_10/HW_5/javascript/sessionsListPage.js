// Отримуємо список сесій із localStorage
let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

// Отримуємо контейнер для виведення сесій
const sessionsListContainer = document.getElementById('sessions-list');

// Перевірка, чи є дані в sessionsList
if (sessionsList.length > 0) {
  sessionsList.forEach((session) => {
    const li = document.createElement('li');
    li.innerText = session; // Вставляємо дату та час відвідування
    sessionsListContainer.appendChild(li); // Додаємо елемент в DOM
  });
} else {
  const li = document.createElement('li');
  li.innerText = 'No visits recorded yet.';
  sessionsListContainer.appendChild(li);
}
