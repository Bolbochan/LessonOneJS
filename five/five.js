//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const Num = prompt(`Plese,enter your number 10000-99999`)

if (Num[0] == Num[4] && Num[1] == Num[3]) {
    console.log(`True`)
}
else {
    console.log(`False`)
}