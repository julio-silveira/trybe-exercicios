function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  }
}
const weekDaysList = document.querySelector(".week-days");

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 01
const dayList = document.querySelector("#days");
let holiday = [24, 25, 31];
let friday = [4, 11, 18, 25];
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
for (item in decemberDaysList) {
  let actualDay = document.createElement("li");
  actualDay.classList.add("day");
  for (day in holiday) {
    if (decemberDaysList[item] === holiday[day]) {
      actualDay.classList.add("holiday");
    }
  }
  for (day in friday) {
    if (decemberDaysList[item] === friday[day]) {
      actualDay.classList.add("friday");
    }
  }
  dayList.appendChild(actualDay).innerText = decemberDaysList[item];
}

//Exercicio 02
let buttons = document.querySelector(".buttons-container");
function createHoliday(feriado) {
  let addHoliday = document.createElement("button");
  addHoliday.setAttribute("id", "btn-holiday");
  buttons.appendChild(addHoliday).innerText = feriado;
}
createHoliday("Feriados");

function changeColor() {
  let holidays = document.getElementsByClassName("holiday");
  for (day in holidays) {
    holidays[day].style.backgroundColor = "red";
  }
}
document.getElementById("btn-holiday").addEventListener("click", changeColor);
