let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

const sessionsListContainer = document.getElementById('sessions-list');

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
