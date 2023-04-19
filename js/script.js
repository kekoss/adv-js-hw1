// 1. Наприклад якщо ми маємо один об'єкт і його прототип, кожен раз коли у прототипа є якась властивість
// об'єкт буде її успадковувати, якщо для нього таку саму властивість не задано явно
// 2. Для того щоб не вибивало помилку;


class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get salary() {
        return this._salary;
    }

    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }

    set salary(salary) {
        this._salary = salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;
    }

    get lang() {
        return this._lang;
    }

    get salary() {
        return this._salary * 3;
    }
}

const programmer1 = new Programmer("John", 30, 5000, ["JavaScript", "Python"]);
const programmer2 = new Programmer("Alice", 28, 4500, ["Java", "C++"]);

console.log(programmer1);
console.log(programmer2);