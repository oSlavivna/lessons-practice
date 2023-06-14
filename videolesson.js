// arr #8

function congratsIfMoreThan100(arr) {
  if (arr.length >= 5) {
    alert(`you have ${arr.length} subscribers`);
  } else {
    alert("not enough, looser");
  }
}

const subscribers = [
  { name: "ross", age: 20, prof: "smm", isCloseFriend: true, sex: "male" },
  { name: "monika", age: 20, prof: "smm", isCloseFriend: true, sex: "female" },
  { name: "chandler", age: 20, prof: "smm", isCloseFriend: false, sex: "male" },
  { name: "phoebe", age: 20, prof: "smm", isCloseFriend: false, sex: "female" },
  { name: "joey", age: 20, prof: "smm", isCloseFriend: true, sex: "male" },
  { name: "user6", age: 20, prof: "smm", isCloseFriend: false, sex: "female" },
  { name: "rachel", age: 20, prof: "smm", isCloseFriend: true, sex: "female" },
  { name: "user8", age: 20, prof: "smm", isCloseFriend: true, sex: "male" },
  { name: "user9", age: 20, prof: "smm", isCloseFriend: false, sex: "male" },
];
//  #10 - Область видимості / Scope
// lessons 10 add new property & new world
function addNice(arr) {
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    element.sex === "male"
      ? ((element.beauty = "handsome"), (element.name += " 🧑"))
      : ((element.beauty = "beautiful"), (element.name += " 👩"));

    // if (element.sex === "male") {
    //   element.beauty = "handsome";
    //   element.name += " 🧑";
    // } else {
    //   element.beauty = "beautiful";
    //   element.name += " 👩";}
  }
  return arr;
}

console.log(addNice(subscribers));
// congratsIfMoreThan100(subscribers)

// loops lesson #9
// 1st- FOR
// for (let i = 0; i < subscribers.length; i++) {
// const e = arr[i];
// console.log(subscribers[i]);
// }
// 2. for of
// for (const iterator of subscribers) {
//   console.log(iterator);
// }
//  3. for in
// const obj = {

// }
// do while
let i = 0;
do {
  // console.log(subscribers[i]);
  i++;
} while (i < subscribers.length);
// practice task
let someArr = [3, 5, 7, 76, 34, 76, 3, 56, 656];
function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    // arr[i] =  arr[i]* arr[i]
    arr[i] *= arr[i];
    console.log(`${i + 1} ${arr[i]}`);
  }
  return arr;
}
// console.log(someArr);
// console.log(squareArr(someArr));
// console.log(someArr);

// #11 - DOM (+callback function. event. anonimna func. )
const btnHappy = document.querySelector("#happy");
const btnSad = document.querySelector("#sad");
const hidenImg = document.querySelector(".img");

btnHappy.addEventListener("click", () => {
  hidenImg.style.display = "block";
  btnHappy.disabled = true; // деактивуэ кнопку
  btnSad.disabled = false; // активуэ кнопку

  btnSad.addEventListener("click", () => {
    hidenImg.style.display = "none";
    btnHappy.disabled = false;
    btnSad.disabled = true;
  });
});

// #12 - Замикання (Closures)
// це фун-я та її здатність достукуватись до змінних лексичного середовища в якому вона була створена.
