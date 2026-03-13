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