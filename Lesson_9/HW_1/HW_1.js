// Створення блоку
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.textContent = "Оригінальний блок";

// Клонування блоку
const cloneNode = div.cloneNode(true);
cloneNode.textContent = "Клонований блок";

// Додавання в body
document.body.append(div, cloneNode);
