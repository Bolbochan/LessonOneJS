//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let BasicDATE = prompt(`Please, enter date in a format (day.month.years)`)
BasicDATE = BasicDATE.split(`.`)

let DATE = new Date(BasicDATE[2], BasicDATE[1] - 1, BasicDATE[0])
DATE.setDate(DATE.getDate() + 1);
console.log(DATE)
