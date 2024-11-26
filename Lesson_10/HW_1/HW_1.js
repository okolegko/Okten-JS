const button = document.getElementById('button');

button.onclick = function () {
  const div = document.getElementById('text');
  if (div) {
    div.style.display = 'none';
  }
};

