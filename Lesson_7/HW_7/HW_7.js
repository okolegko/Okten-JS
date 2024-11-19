class Car {
  constructor(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }

  // Метод drive
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }

  // Метод info
  info() {
    console.log('Інформація про автомобіль:');
    for (const key in this) {
      if (typeof this[key] !== 'function' && key !== 'driver') {
        console.log(`${key} - ${this[key]}`);
      }
    }
    // Виведення інформації про водія
    if (this.driver) {
      console.log('Інформація про водія:');
      for (const key in this.driver) {
        console.log(`${key} - ${this.driver[key]}`);
      }
    }
  }

  // Метод increaseMaxSpeed
  increaseMaxSpeed(newSpeed) {
    if (newSpeed > 0) {
      this.maxSpeed += newSpeed;
    }
  }

  // Метод changeYear
  changeYear(newValue) {
    if (newValue > 1815) {
      this.year = newValue;
    }
  }

  // Метод addDriver
  addDriver(driver) {
    if (typeof driver === 'object' && driver !== null) {
      this.driver = driver;
    }
  }
}

// Приклад використання
const car = new Car('Passat', 'Volkswagen', 2015, 220, 2.0);

// Виклик методів
car.drive();
car.increaseMaxSpeed(30);
car.changeYear(2021);
car.addDriver({ name: 'Oleh Kovalenko', age: 28, experience: 6 });
car.info();
