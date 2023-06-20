/* hometask from 16.06 
створити імпут та кнопку, 
в імпут вводиться ім`я користувача і 
записується у локал сторидж
якщо в локал стoридж вже є iм`я користувача, 
то імпут з кнопкою не показуються, 
а видно параграф зі словами - Привіт, імя користувача. */
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");
const justPar = document.querySelector("#taskHidden");

 let userInputName = localStorage.getItem("userName");

function createElement() {
  const newUserPar = document.createElement("p");
  newUserPar.textContent = "Привіт " + userInputName;
  justPar.insertAdjacentElement("afterend", newUserPar);
  wrapper.style.display = "none";
}
 
 if (userInputName ) {
  createElement();
} else {
  btn1.addEventListener("click", () => {
 localStorage.setItem("userName", input1.value); 
    createElement(); })
  }


   




// addEventListener("click", () => {});

// домашка від 20 червня
// завдання 3/клік на довший параграф
let paragraphs = document.querySelectorAll(".paragraphs");

let longestParagraph = null;
let longestLength = 0;

for (let i = 0; i < paragraphs.length; i++) {
  const length = paragraphs[i].textContent.length;

  if (length >= longestLength) {
    longestLength = length;
    longestParagraph = paragraphs[i];
  }
}
longestParagraph.style.cursor = "pointer";
if (longestParagraph) {
  longestParagraph.addEventListener("click", () => {
    alert("Клік на найдовший рaragraph!");
  });
}

// 4/ завдання 4 - Задача 2. Вы просите пользователя ввести сумму его зарплаты.
//Затем рассчитываете:
// Добавку в виде премии в сумме 15% от зарплаты.
// Налоги в сумме 10% от суммы всех начислений (зарплата + премия).
// Трату в магазине в сумме 190.
// Разделяете оставшуюся сумму между пользователем и его "женой"/"мужем".
// Показуєте залишок в елерті
const salary = document.querySelector("#salary");
const salaryBtn = document.querySelector("#salary-btn");

salaryBtn.addEventListener("click", () => {
  let sumSalaty = Number(salary.value);
  let addional = sumSalaty * 0.15;
  let taxes = (sumSalaty + addional) * 0.1;
  let costs = 190;
  let rest = (sumSalaty + addional - taxes - costs) / 2;

  const neWpar2 = document.createElement("p");
  neWpar2.textContent = "дружина отримає " + rest + " грн  і ти стільки же ";
  salaryBtn.insertAdjacentElement("afterend", neWpar2);
});

// завдання 5 - зробити верстку для тудуЛист і розуміти його код

// додати до тудулиста новий функціонал - якщо вводять завдання, яке вже є списку, то
// в алерт сповіщаємо, що завдання таке вже записано

// .......................................
///https://g2cb1fdcabb8c9f-dbeducation.adb.eu-frankfurt-1.oraclecloudapps.com/ords/newswire/notes/allnotes/

// fetch('https://g2cb1fdcabb8c9f-dbeducation.adb.eu-frankfurt-1.oraclecloudapps.com/ords/newswire/notes/allnotes/')
//   .then(response => response.json())
//   .then(data => {
//     const properties = {};

//     for (let property in data) {
//       properties[property] = data[property];
//     }

//     console.log('Properties:', properties);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
