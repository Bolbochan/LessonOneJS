//Запросить у пользователя год и проверить, високосный он или нет.Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let age = prompt(`Please, enter age`)

if (age % 4 == 0 || age % 400 == 0 && age % 100 != 0) {
    console.log(`True`)
}
else {
    console.log(`False`)
}