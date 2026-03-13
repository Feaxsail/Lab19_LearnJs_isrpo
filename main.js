console.log("Шаг 5");

for (let i = 0; i < 10; i++) {
    console.log("For cycle i:", i);
}

console.log("Task 5.3.1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Task 5.3.2 ");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

console.log("Task 5.3.3");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum 1 to 10:", sum);

console.log("Task 5.4 ");
let count = 5;
while (count > 0) {
    console.log("While count:", count);
    count--;
}

let number = 5;
console.log("Task 5.5");
while (number > 0) {
    console.log("Number:", number);
    number--;
}

console.log("Task 5.6");
let k = 0;
do {
    console.log("Do...While k:", k);
    k++;
} while (k < 3);

console.log("Task 5.7");
for (let i = 0; i < 10; i++) {
    if (i === 3) break;
    console.log("Break loop:", i);
}

console.log("Task 5.7");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log("Continue loop:", i);
}

console.log(" Task 5.8 ");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;  
    if (i === 8) break;    
    console.log("задачка 5.8:", i);
}

console.log("5.9");
for (let i = 1; i <= 3; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    console.log(star);
}

console.log("Самостоялка йоу");
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

console.log(" Шаг 6");

function add(a, b) {
    return a + b;
}
console.log("Сложение 2+3:", add(2, 3));

function multiply(x, y) {
    return x * y;
}
console.log(" Задание 6.3");
console.log("Умножение 4*5:", multiply(4, 5));

function sayHello() {
    console.log("Привет, Мир!");
}
sayHello();

function printInfo(name, age) {
    console.log("Задание 6.5");
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Alex", 25);

function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Maria");

function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
console.log("Задание 6.7");
console.log("Цена со скидкой по умолчанию:", calculateDiscount(100));
console.log("Цена со скидкой 20%:", calculateDiscount(100, 20));

const myFunc = function() {
    console.log("Функция как значение");
};
myFunc();

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log("Счётчик замыкания:", counter());

const arrowAdd = (a, b) => {
    return a + b;
};
console.log("Стрелочная функция сложения:", arrowAdd(5, 5));

const double = x => x * 2;
console.log("Стрелочная функция удвоения:", double(10));

console.log("Шаг 7. Массивы ");

let arr = [1, 2, 3];
console.log("Массив:", arr);

let colors = ["Red", "Green", "Blue"];
console.log(" Задание 7.4 ");
console.log("Первый:", colors[0], "Последний:", colors[colors.length - 1]);
colors[1] = "Yellow";
console.log("Изменённые цвета:", colors);

console.log("Длина массива colors:", colors.length);

colors.push("Black");
console.log("После push:", colors);
colors.pop();
console.log("После pop:", colors);

let students = [];
students.push("Anna");
students.push("Bob");
students.push("Charlie");
students.pop();
console.log("Задание 7.7 ");
console.log("Студенты:", students);

for (let i = 0; i < students.length; i++) {
    console.log("Студент:", students[i]);
}

for (let student of students) {
    console.log("Студент (of):", student);
}

let cities = ["Moscow", "Paris", "London"];
let index = cities.indexOf("Paris");
console.log("Индекс Paris:", index);
console.log("Включает London:", cities.includes("London"));

let targetCity = "London";
console.log("Задание 7.12");
if (cities.includes(targetCity)) {
    console.log("Город найден на индексе:", cities.indexOf(targetCity));
} else {
    console.log("Город не найден");
}