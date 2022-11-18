const form = document.querySelector(".form")
const int = document.querySelector(".int")
const btn = document.querySelector(".btn")

let currentYear = 2022;
let currentDay = 18;
let currentMonth = 11;

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let intVal = int.value;
    console.log(intVal.split("-"));

    let month = intVal[0] - currentMonth;
    let day = intVal[1] - currentDay;
    let year = intVal[2] - currentYear;

    console.log(year);
    console.log(day);
    console.log(month);
})