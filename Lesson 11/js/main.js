const form = document.querySelector(".form")
const int = document.querySelector(".int")
const btn = document.querySelector(".btn")

let currentYear = 2022;
let currentDay = 18;
let currentMonth = 11;

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let intVal = int.value;
    let intArr = intVal.split("-");

    for (let i = 0; i < intArr.length; i++) {
        const element = intArr[i];
        console.log(element);
    }
    let year = intVal[0] - currentYear;
    let day = intVal[1] - currentDay;
    let month = intVal[2] - currentMonth;

    console.log(year);
    console.log(day);
    console.log(month);

})