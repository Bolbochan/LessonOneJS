//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// Answer( 476 || 1453 || 1871)

let QuestionOne = prompt('You sleep? ( YES||NO||SO )')
let QuestionTwo = prompt('Constantinople captured?? ( YES||NO||SO )')
let QuestionThree = prompt('Are you hungry? ( YES||NO||SO )')
let Result = 0

switch (QuestionOne) {

    case `YES`: {
        QuestionOne = 0
        console.log(`False`)
    } break;

    case `NO`: {
        QuestionOne = 0
        console.log(`False`)
    } break;

    case `SO`: {
        QuestionOne = 2
        console.log(`True`)
    } break;
}

switch (QuestionTwo) {

    case `YES`: {
        QuestionTwo = 2
        console.log(`True`)
    } break;

    case `NO`: {
        QuestionTwo = 0
        console.log(`False`)
    } break;

    case `SO`: {
        QuestionTwo = 0
        console.log(`False`)
    } break;
}

switch (QuestionThree) {

    case `YES`: {
        QuestionThree = 0
        console.log(`False`)
    } break;

    case `NO`: {
        QuestionThree = 2
        console.log(`True`)
    } break;

    case `SO`: {
        QuestionThree = 0
        console.log(`False`)
    } break;
}
if (QuestionTwo > 0) {
    Result = QuestionOne + QuestionTwo + QuestionThree
    console.log(Result)
}
