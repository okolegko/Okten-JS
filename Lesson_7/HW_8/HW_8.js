// Клас Cinderella з полями ім'я, вік, розмір ноги
class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

// Клас Prince з полями ім'я, вік та розмір знайденої туфельки
class Prince {
  constructor(name, age, sizeFoundShoe) {
    this.name = name;
    this.age = age;
    this.sizeFoundShoe = sizeFoundShoe;
    this.wife = null; // Місце для збереження знайденої попелюшки
  }
}

// Створення масиву з 10 попелюшок
const cinderellas = [
  new Cinderella('A', 18, 34),
  new Cinderella('B', 19, 35),
  new Cinderella('C', 20, 36),
  new Cinderella('D', 21, 37),
  new Cinderella('E', 22, 38),
  new Cinderella('F', 23, 39),
  new Cinderella('G', 24, 40),
  new Cinderella('H', 25, 41),
  new Cinderella('I', 26, 42),
  new Cinderella('J', 27, 43)
];

// Створення об'єкта принца
const prince = new Prince('Harry', 28, 38);

// 4. Пошук попелюшки за допомогою циклу
let cinderellaMain = null;
for (let i = 0; i < cinderellas.length; i++) {
  if (cinderellas[i].footSize === prince.sizeFoundShoe) {
    cinderellaMain = cinderellas[i];
    break; // Перериваємо цикл після знаходження попелюшки
  }
}

prince.wife = cinderellaMain; // Принц знайшов свою попелюшку

console.log(`Дружина принца — ${prince.wife.name}, їй ${prince.wife.age} років, і вона має розмір ноги ${prince.wife.footSize}.`);

// 5. Пошук за допомогою функції find
const cinderellaMainUsingFind = cinderellas.find(cinderella => cinderella.footSize === prince.sizeFoundShoe);

console.log(`Знайдено за допомогою методу find: Дружина принца — ${cinderellaMainUsingFind.name}, їй ${cinderellaMainUsingFind.age} років, і вона має розмір ноги ${cinderellaMainUsingFind.footSize}.`);
