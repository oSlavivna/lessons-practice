const homeElement = document.getElementById("home");
const taskpage = document.getElementById("taskpage");
homeElement.style.right = "2.5%"; // Задати відступ від правого краю
taskpage.style.right = "2.5%";
taskpage.style.top = "8.5%";

let arr = ["nick", "john", "mary"];
for (let i = 0; i < arr.length; i++) {
  // alert ( i + i)
  // alert ( arr[i] + i)
  // alert ( arr[i] )
  // const element = arr[i];

  if (i == 0) {
    // alert ( arr[i] )
  } else {
  }
}
// dom manipulation
const title = document.getElementById("title");
title.style.backgroundColor = "yellow";

// параграфи
const parag = document.getElementById("parag");
parag.style.color = "blue";

const parag2 = document.getElementById("parag2");
parag2.style.color = "red";

let paragArr = [parag, parag2];

// for (let i = 0; i < paragArr.length; i++) {
//   // const element = array[index];
//   paragArr[i].style.color = "pink";
// }
for (let i = 0; i < paragArr.length; i++) {
  if (i == 0) {
    paragArr[i].style.color = "pink";
  } else {
    paragArr[i].style.color = "orange";
  }
}
/////////////////////////////////////
//----- 9 06 23 lesson---------------------
const myFunk = function () {
  alert("hello world");
};
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", myFunk);
//task1
let freeArr = [1, 2, 4, 6, 8, 45];
const btn2 = document.querySelector("#btn2");

function showArr(arr) {
  alert(freeArr.length);
}

btn2.addEventListener("click", showArr);
//task2 change color
const changePar = document.querySelector("#parColor");
const btNcolor = document.querySelector("#btNcolor");

function parColor() {
  // Генеруємо випадковий RGB колір
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)})`;

  changePar.style.color = randomColor;
}

btNcolor.addEventListener("click", parColor);
// ----AGE -----
const btn3 = document.querySelector("#btn3");
const input1 = document.querySelector("#input1");

function inputValue() {
  const value = input1.value;
  if (!value) {
    alert("You didn't enter anything!");
  } else if (!isNaN(value)) {
    alert(`LOL, your age: ${value}`);
  } else {
    alert(`We don't play: ${value} enter a number!`);
  }
  input1.value = "";
}

//  HELP
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    inputValue();
  }
}
input1.addEventListener("keydown", handleKeyPress);
//
btn3.addEventListener("click", inputValue);
//task3
const btn4 = document.querySelector("#btn4");
const input2 = document.querySelector("#input2");

function yourAge() {
  const curDate = new Date();
const year = curDate.getFullYear();
  let userAge = year - input2.value;
  if (!input2.value) {
    alert(`${year} is not your birth year`);
  } else {
    alert(userAge);
  }

  input2.value = "";
}
btn4.addEventListener("click", yourAge);
/////////////////////////////////
// 13 06 урок
// task 1
const btn5 = document.querySelector("#btn5");
const input5 = document.querySelector("#input5");
const myPar = document.querySelector("#p5");
let smtArr = [];

// btn5.addEventListener('click', () => {
// //  smtArr.push(input5.value)
// //  console.log(smtArr);
// // зміна тексту
// myPar.textContent = input5.value ;
//  input5.value = ''
// })

// TASK 2
// btn5.addEventListener("click", () => {
//   myPar.textContent = '1' + input5.value ;
// });

//  сторення елементів // TODOLIST
const body = document.querySelector("body");

btn5.addEventListener("click", () => {
  const neWpar = document.createElement("p");
  const neWbutton = document.createElement("button");
  neWpar.textContent = input5.value;
  neWbutton.textContent = "delete";
  // body.appendChild(neWpar);
  // body.appendChild(neWbutton);
  btn5.insertAdjacentElement("afterend", neWbutton);
  btn5.insertAdjacentElement("afterend", neWpar);

  neWbutton.classList.add("click-btn");
  neWbutton.addEventListener("click", () => {
    // body.removeChild(neWpar);
    // body.removeChild(neWbutton);
    neWpar.remove();
    neWbutton.remove();
  });
  // запис даних з інпуту в локал сторидж
  // localStorage.setItem('to do', input5.value) // оновлюється❌ не зберігає попереднє значення
  smtArr.push(input5.value);
  localStorage.setItem("todos", JSON.stringify(smtArr));
  console.log(smtArr);

  input5.value = "";
});
// чат хелп
input5.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Зупиняємо діяння за замовчуванням, щоб форма не відправлялась
    btn5.click(); // Симулюємо клік на кнопку btn5
  }
});
// arr from localStorage
let storedToDos = localStorage.getItem("todos"); //в дужках-за яким ключем беремо
//convert string-back arr
let parseToDos = JSON.parse(storedToDos);
// console.log(parseToDos);

// for (let index = 0; index < parseToDos.length; index++) {
//   const toDoSpar = document.createElement("p");
//   toDoSpar.textContent = parseToDos[index];
//   body.appendChild(toDoSpar);
// }

//  hometask.13.06 : норм хедер щоб гамбургер працював & відео

// 16 06
const btn6 = document.querySelector("#btn6");
const input6 = document.querySelector("#input6");

btn6.addEventListener("click", () => {
  const neWpar = document.createElement("p");

  if (input6.value === "Olha") {
    alert("yes! my name is " + input6.value);
    body.appendChild((neWpar.textContent = "Правильно!"));
  } else {
    alert("try again");
    body.appendChild((neWpar.textContent = "no!!!!!"));
  }

  input6.value = "";
});

// task 2  оприділяємо куди клікав користувач
const answers = document.querySelectorAll(".answ"); //всі класи вибрали
for (let index = 0; index < answers.length; index++) {
  answers[index].addEventListener("click", (e) => {
    // console.log(e.target.id);
    alert(document.getElementById(e.target.id).textContent);
  });
}

//cookies & local storage
// save cookie ⬇
// document.cookie = "username=john doe";
// key  = username. value=john doe  ⬇
//localStorage.setItem("myCat", "Tom"); // записуємо
//localStorage.getItem("myCat"); // отримуємо локал сторидж. вказавши ключ
// alert(localStorage.getItem("myCat")); // Tom

// lesson 20 06
// loop s
const paragLorem = document.querySelectorAll(".papag-lorem");

for (let index = 0; index < paragLorem.length; index++) {
  let longer = []
  
  longer.push.paragLorem[index].textContent.length;

  // if (paragLorem[index].innerText === "Привіт") {
  //   paragLorem[index].addEventListener("click", () => {
 
  //   });
  // }

}
 
 
 
