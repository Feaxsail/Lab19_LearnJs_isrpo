console.log("--- Шаг 5. Циклы ---");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("--- Задание 5.3.1 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("--- Задание 5.3.2 ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- Задание 5.3.3 ---");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Сумма:", sum);

console.log("--- Задание 5.4 ---");
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

console.log("--- Задание 5.5 ---");
let number = 5;
while (number > 0) {
    console.log(number);
    number--;
}

console.log("--- Задание 5.6 ---");
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

console.log("--- Задание 5.7 Break ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("--- Задание 5.7 Continue ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

console.log("--- Задание 5.8 ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}

console.log("--- Задание 5.9 ---");
for (let i = 1; i <= 3; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    console.log(star);
}

console.log("--- Задание 5.10 ---");
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

console.log("\n--- Шаг 6. Функции ---");

function sum(a, b) {
    return a + b;
}
console.log("Sum(3, 5):", sum(3, 5));

function multiply(x, y) {
    return x * y;
}
console.log("--- Задание 6.3 ---");
console.log("Multiply(4, 5):", multiply(4, 5));

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

function printInfo(name, age) {
    console.log("--- Задание 6.5 ---");
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Анна", 25);

function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");

function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
console.log("--- Задание 6.7 ---");
console.log("Цена со скидкой:", calculateDiscount(1000));
console.log("Цена со скидкой 20%:", calculateDiscount(1000, 20));

const add = function(a, b) {
    return a + b;
};
console.log("Add(2, 3):", add(2, 3));

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

function sumFunc(a, b) {
    return a + b;
}
console.log("SumFunc(5, 3):", sumFunc(5, 3));

const sumFunc2 = (a, b) => a + b;
console.log("SumFunc2(5, 3):", sumFunc2(5, 3));

const double = x => x * 2;
console.log("Double(10):", double(10));

const sumFunc3 = (a, b) => a + b;
console.log("SumFunc3(7, 8):", sumFunc3(7, 8));

const sayGreeting = () => console.log("Hello");
sayGreeting();

const square = x => x * x;
console.log("Square(4):", square(4));

const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
};
console.log("Calculate(3, 4):", calculate(3, 4));

console.log("\n--- Шаг 7. Массивы ---");

let numbersArr = [1, 2, 3, 4, 5];
console.log("NumbersArr:", numbersArr);

console.log("numbersArr[0]:", numbersArr[0]);
console.log("numbersArr[1]:", numbersArr[1]);

let colors = ["Red", "Green", "Blue"];
console.log("--- Задание 7.4 ---");
console.log("First:", colors[0]);
console.log("Last:", colors[colors.length - 1]);
colors[1] = "Yellow";
console.log("Colors:", colors);

console.log("Length:", numbersArr.length);

numbersArr.push(10);
console.log("After push:", numbersArr);

numbersArr.pop();
console.log("After pop:", numbersArr);

let students = [];
students.push("Anna");
students.push("Bob");
students.push("Charlie");
students.pop();
console.log("--- Задание 7.7 ---");
console.log("Students:", students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log("numbers2[" + i + "]:", numbers2[i]);
}

for (let value of numbers2) {
    console.log("Value:", value);
}

let mixedArray = [1, "text", true, 3.14];
console.log("MixedArray:", mixedArray);

let fruits = ["apple", "banana", "cherry"];
console.log("Includes banana:", fruits.includes("banana"));
console.log("Includes mango:", fruits.includes("mango"));

let cities = ["Moscow", "Saint Petersburg", "Kazan"];
console.log("--- Задание 7.12 ---");
let searchCity = "Kazan";
if (cities.includes(searchCity)) {
    console.log("Index of", searchCity + ":", cities.indexOf(searchCity));
} else {
    console.log("City not found");
}

console.log("\n--- Шаг 8. Объекты ---");

let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true
};
console.log("User2:", user2);

console.log("user2.name:", user2.name);
console.log("user2.age:", user2.age);
console.log("user2['name']:", user2["name"]);

let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2023
};
console.log("--- Задание 8.4 ---");
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);
book.year = 2024;
console.log("New year:", book.year);

book.pages = 350;
delete book.author;
console.log("Modified book:", book);

let person = {
    name: "John",
    age: 30
};
person.sayHello = function() {
    console.log("Hello, I am " + this.name);
};
person.sayHello();

let car = {
    brand: "Toyota",
    year: 2020
};
car.getInfo = function() {
    console.log("--- Задание 8.7 ---");
    console.log("Car: " + this.brand + ", Year: " + this.year);
};
car.getInfo();

for (let key in book) {
    console.log(key + ":", book[key]);
}

let product = {
    name: "Laptop",
    price: 1000,
    inStock: true
};
console.log("--- Задание 8.9 ---");
for (let key in product) {
    console.log(key + ":", product[key]);
}

let user = {
    name: "Alice",
    contacts: {
        email: "alice@example.com",
        phone: "+1234567890"
    },
    hobbies: ["reading", "gaming"]
};
console.log("Nested object:", user);
console.log("Email:", user.contacts.email);
console.log("First hobby:", user.hobbies[0]);

let student = {name: "Григорий",
skills: ["HTML", "CSS", "JS"],
address: {
city: "Волжский",
street: "Пушкина",
  },
};
console.log(student. skills [0]) ;
console.log(student. address. city) 
