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
const justPar = document.querySelector("#justPar");

btn1.addEventListener("click", () => {
  let userInputName = input1.value;

  if (userInputName !== "") {
    localStorage.setItem("userName", userInputName);
    createElement(userInputName);
  }
});

function createElement(userName) {
  const newUserPar = document.createElement("p");
  newUserPar.textContent = "Привіт " + userName;
  justPar.insertAdjacentElement("afterend", newUserPar);
  wrapper.style.display = "none";
}

const userInputName = localStorage.getItem("userName");

if (userInputName !== null) {
  createElement(userInputName);
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
const wrapperList = document.querySelector(".wrapperList");
const inputList = document.querySelector(".wrapperList input");
const buttonList = document.querySelector(".wrapperList button");
const affairsDiv = document.querySelector(".affairs");

let storedToDos = localStorage.getItem("toDos");
let parsedToDos = JSON.parse(storedToDos);
let toDosArray = [];

if (storedToDos) {
  toDosArray = parsedToDos;
}

buttonList.style.cursor = "pointer";
buttonList.addEventListener("click", () => {
  if (inputList.value != "") {
    toDosArray.push(inputList.value);
    localStorage.setItem("toDos", JSON.stringify(toDosArray));

    addToDos();
    inputList.value = "";
  } else {
    alert("no case recorded");
  }
});

addToDos();

function addToDos() {
  storedToDos = localStorage.getItem("toDos");
  parsedToDos = JSON.parse(storedToDos);

  if (storedToDos) {
    affairsDiv.innerHTML = "";

    for (let index = 0; index < parsedToDos.length; index++) {
      const container = document.createElement("div");

      const par = document.createElement("p");
      par.textContent = parsedToDos[index];
      container.appendChild(par);

      const button = document.createElement("button");
      button.style.cursor = "pointer";
      button.textContent = "delete";
      button.setAttribute("data-index", index);
      container.appendChild(button);

      affairsDiv.appendChild(container);

      button.addEventListener("click", function () {
        const index = button.getAttribute("data-index");
        toDosArray.splice(index, 1);

        localStorage.setItem("toDos", JSON.stringify(toDosArray));

        affairsDiv.removeChild(container);
      });
    }
  }
}
//X додати до тудулиста новий функціонал - якщо вводять завдання, яке вже є списку, то
// в алерт сповіщаємо, що завдання таке вже записано
const apiUrl =
  "https://g2cb1fdcabb8c9f-dbeducation.adb.eu-frankfurt-1.oraclecloudapps.com/ords/newswire/notes/allnotes";
let itemsFromJson = [];

fetch(apiUrl)
  .then((response) => response.json())
  .then((json) => {
    itemsFromJson = json.items;
    // processItems(itemsFromJson);

    const fullData = itemsFromJson.filter(function (name) {
      return name.length >= 7;
    });
    // console.log(fullData); // empty
  });
//
//  function processItems(items) {
//   const filteredItems = items.filter((item) => {
//     return item.name.length <= 10 && item.phone;
//   });
//   console.log(filteredItems);
// }
//

//
// console.log(fullData);

// for (const i of itemsFromJson) {
//    console.log(i.name + i.phone);
// }

//..............................................................................
// HOMETASK FROM 27 06  Продублюю тут:
// Так ми виводимо в консоль назви товарів
// let arr = [];
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => {
//     arr = json.products;
//     console.log(arr);
//     // console.log(json.products);
//     console.log(json.products[6].price);

//     for (let index = 0; index < arr.length; index++) {
//       const pricrEl = arr[index].price;
//       const pricEl = allArray[index].price;
//       const elName = arr[index].title;

//       let elPonPage = document.createElement("p");

//       if (pricEl >= 40) {
//       if (pricrEl >= 40) {
//         elPonPage.textContent = `◽ ${elName}, price: ${pricrEl}.`;
//         wrapperList.insertAdjacentElement("afterend", elPonPage);
//       }
//     }
//   });
// Завдання 1 - показати назви тільки тих товарів, ціна яких вища за 40
// Завдання 2 - вивести результат 1-го завдання на сторінку
// Завдання 3 - показати на сторінці поруч із назвою ціну товара

//..............................................................................
const boxWraps = document.querySelectorAll(".box-wrap"); // всі діви з цим класом
const taskthree = document.querySelector(".taskthree");  

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  /////// .then(json => console.log(json.title))
  .then((json) => {
    allArray = json.products;
    console.log(allArray);

    for (let index = allArray.length - 1; index >= 0; index--) {
      // for (let index = 0; index < allArray.length; index++) {
      const element = allArray[index].title;
      const imageProduct = allArray[index].images[0];
      const pricEl = allArray[index].price;
      // console.log(element);
      let arrImg = document.createElement("img");
      arrImg.src = imageProduct;
      arrImg.className = "arrimgsize";

      let arrPar = document.createElement("div");
      arrPar.className = "divwithjon";
      if (pricEl >= 40) {
        arrPar.textContent = `◽ ${element}, price: ${pricEl}💸`;
        arrPar.appendChild(arrImg);
        // taskthree.insertAdjacentElement("afterend", arrPar);
        // Перевіряємо, чи існує четвертий елемент
        if (boxWraps.length >= 4) {
          const fourthBoxWrap = boxWraps[3];
          fourthBoxWrap.insertAdjacentElement("afterend", arrPar);
        }
      }
    }
  });

// ..........................................
// .then(json => console.log(json)) //X
// setTimeout(() => {
//   console.log(allArray);
// }, 1000);

// .then(json => allArray = json)
// console.log(allArray);
// .......................................

// const apiUrl = 'https://g2cb1fdcabb8c9f-dbeducation.adb.eu-frankfurt-1.oraclecloudapps.com/ords/newswire/notes/allnotes';
//  fetch('https://g2cb1fdcabb8c9f-dbeducation.adb.eu-frankfurt-1.oraclecloudapps.com/ords/newswire/notes/allnotes/')

//  fetch( apiUrl )
//   .then(response => response.json())
///////////////
//  .then((json) => {

//     console.log(json);
///////////////
//   .then(posts => {
//     question = posts
//     console.log(question);
//     // console.log(question.name);

//   })

// .then(data => {
//   const properties = {};

//   for (let property in data) {
//     properties[property] = data[property];
//   }

//   console.log('Properties:', properties);
// })
// .catch(error => {
//   console.error('Error:', error);
// });
