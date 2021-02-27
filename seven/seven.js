//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let Sum = prompt(`Enter,sum`)

if (Sum >= 200 && Sum <= 300) {
    Sum = Sum - (Sum * 0.03)
    console.log(Sum)
}
else if (Sum > 300 && Sum <= 500) {
    Sum = Sum - (Sum * 0.05)
    console.log(Sum)
}
else if (Sum > 500) {
    Sum = Sum - (Sum * 0.07)
    console.log(Sum)
}
else if (Sum < 200) {
    console.log(`Not discont`)
}