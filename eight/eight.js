//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circle = prompt(`Please,enter`);
let square = prompt(`Please,enter`);
circle = circle / Math.PI;
square = square / 4;

if (square > circle) {
    console.log(`True`)
}
else {
    console.log(`False`)
}
