const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, value: `Object ${i + 1}` }));

const contentDiv = document.getElementById('content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 1;
const itemsPerPage = 10;

function renderPage() {
  contentDiv.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageItems = data.slice(start, end);

  pageItems.forEach(item => {
    const div = document.createElement('div');
    div.innerText = `ID: ${item.id}, Value: ${item.value}`;
    contentDiv.appendChild(div);
  });

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
    currentPage++;
    renderPage();
  }
});


renderPage();
