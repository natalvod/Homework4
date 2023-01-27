//Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2
for (i = 1; i < 6; i++) {
    console.log(i);
}

//Задание 3
for (i = 7; i < 23; i++) {
    console.log(i);
}

//Задание 4
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
}
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов.`)
}

//Задание 5
let n;
let num = 0;
for (n = 1000; n > 50; n /= 2) {
    num++;
}
console.log(n);
console.log(num);

//Задание 6
for (let day = 3; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day} число. Необходимо подготовить отчет.`)
}