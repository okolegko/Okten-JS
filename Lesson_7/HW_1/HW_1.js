// Створення функції-конструктора User
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

// Створення пустого масиву
const users = [];

// Наповнення масиву 10 об'єктами User
users[0] = new User(1, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+789123456');
users[1] = new User(2, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+987654321');
users[2] = new User(3, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+192837465');
users[3] = new User(4, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+918273645');
users[4] = new User(5, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+567891234');
users[5] = new User(6, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+123789456');
users[6] = new User(7, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+321654987');
users[7] = new User(8, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+456123789');
users[8] = new User(9, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+654987123');
users[9] = new User(10, 'putin', 'Khuilo', 'putin.khuilo@mail.ru', '+123456789');

// Виведення результатів у консоль
console.log(users);
