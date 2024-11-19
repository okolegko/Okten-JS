// 1. Створення класу Client
function Client(id, name, surname, email, phone, order) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = order; // Масив зі списком товарів
}

// 2. Створення пустого масиву clients
let clients = [];

// 3. Наповнення масиву об'єктами Client
clients = [
  new Client(1, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+987654321', [{ title: 'TV', price: 13000 }, { title: 'Phone', price: 9800 }]),
  new Client(2, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+123456789', [{ title: 'Laptop', price: 20000 }, { title: 'Tablet', price: 8000 }]),
  new Client(3, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+564738291', [{ title: 'Headphones', price: 1500 }, { title: 'Tablet', price: 8000 }]),
  new Client(4, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+456123789', [{ title: 'Smartwatch', price: 3000 }, { title: 'Camera', price: 12000 }]),
  new Client(5, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+987123654', [{ title: 'Monitor', price: 5000 }, { title: 'Keyboard', price: 700 }]),
  new Client(6, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+321654987', [{ title: 'Mouse', price: 600 }, { title: 'Tablet', price: 8000 }]),
  new Client(7, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+159753258', [{ title: 'Printer', price: 4500 }, { title: 'Scanner', price: 8000 }]),
  new Client(8, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+753951456', [{ title: 'Router', price: 2000 }, { title: 'Modem', price: 1500 }]),
  new Client(9, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+987456321', [{ title: 'External HDD', price: 2500 }, { title: 'Flash Drive', price: 500 }]),
  new Client(10, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+654321789', [{ title: 'Desk Lamp', price: 1200 }, { title: 'Tablet', price: 8000 }]),
];

// 4. Виведення масиву клієнтів у консоль
console.log(clients);
