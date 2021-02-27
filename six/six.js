//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let USD = prompt(`Enter,sum`)
let Currency = prompt(`Please,enter currency(EUR||UAN||PLN)`)
const EUR = (0.82)
UAN = (27.93)
PLN = (3.71)

switch (Currency) {

    case `EUR`: {
        USD *= EUR
        console.log(USD)
    } break;

    case `UAN`: {
        USD *= UAN
        console.log(USD)
    } break;

    case `PLN`: {
        USD *= PLN
        console.log(USD)
    } break;
}