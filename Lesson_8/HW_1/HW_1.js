function cloner(obj) {

  if (obj === null || obj === undefined || (typeof obj === 'number' && isNaN(obj))) {
    throw new Error(`Об'єкт не може бути null, undefined або NaN`);
  }

  const cloneObj = JSON.parse(JSON.stringify(obj));

  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      cloneObj[key] = obj[key]; // Зберігаємо посилання на функцію з оригінального об'єкта
    }
  }

  return cloneObj;
}

// Приклад використання
const original = {
  id: 1,
  name: 'Test',
  greeting() {
    console.log('putin!');
  },
  foo() {
    console.log('Khuilo');
  },
};

// Створюємо копію
const clone = cloner(original);

clone.greeting();
clone.foo();

console.log(clone);
