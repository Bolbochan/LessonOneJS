//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const age = prompt("Please, enter your age");
const NumAge = parseInt(age);

if (NumAge >= 60) {
    console.log(`Old`);
} else if (NumAge >= 18) {
    console.log(`Adult`);
} else if (NumAge >= 12) {
    console.log(`Teenage`);
} else {
    console.log(`Children`)
}