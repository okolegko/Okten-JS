Array.prototype.myFilter = function (predicate) {
  const arr = [];
  for (const item of this) {
    if (predicate(item)) {
      arr.push(item);
    }
  }

  return arr;
};

let users = [
  {name: 'vasia', age: 31, status: false},
  {name: 'vasia', age: 30, status: true},
  {name: 'vasia', age: 27, status: true},
  {name: 'vasia', age: 28, status: false},
  {name: 'vasia', age: 25, status: true},
  {name: 'vasia', age: 48, status: false},
  {name: 'vasia', age: 19, status: false},
  {name: 'vasia', age: 29, status: true},
  {name: 'vasia', age: 41, status: true},
  {name: 'vasia', age: 21, status: false},
  {name: 'vasia', age: 34, status: true}
];

const result = users.myFilter((user) => user.status);

console.log(result);

Array.prototype.myForEach = function (callback) {
  for (const item of this) {
    callback(item);
  }
};

users.myForEach((user) => console.log(user.name));  // Виведе всі імена
