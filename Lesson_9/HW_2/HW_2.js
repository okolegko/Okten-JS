const arr = ['Main', 'Products', 'About us', 'Contacts'];

const menu = document.createElement('ul');
menu.classList.add('menu');

for (const item of arr) {
  const li = document.createElement('li');
  li.innerText = item;
  menu.appendChild(li);
}

document.body.appendChild(menu);


