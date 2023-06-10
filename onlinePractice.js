const homeElement = document.getElementById("home");
homeElement.style.right = "2.5%"; // Задати відступ від правого краю
homeElement.style.left = "auto"; // Забрати відступ з лівого краю (якщо він був заданий)
const lessonBody = document.querySelector("body");

// alert('hi')
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
console.log(title);

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
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

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
// чат GPT HELP
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
  let userAge = 2023 - input2.value;
  if (!input2.value) {
    alert("2023 not your birth year");
  } else {
    alert(userAge);
  }
  input2.value = "";
}
btn4.addEventListener("click", yourAge);
/////////////////////////////////
