//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

const Num = prompt(`Please, enter your number 100-999`)

if (Num[0] == Num[1] || Num[0] == Num[2] || Num[1] == Num[2]) {
    console.log(`TRUE`)
}
else {
    console.log(`FALSE`)
}

