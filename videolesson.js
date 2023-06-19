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
  { name: "monika", age: 22, prof: "smm", isCloseFriend: true, sex: "female" },
  { name: "chandler", age: 12, prof: "smm", isCloseFriend: false, sex: "male" },
  { name: "phoebe", age: 15, prof: "smm", isCloseFriend: false, sex: "female" },
  { name: "joey", age: 16, prof: "smm", isCloseFriend: true, sex: "male" },
  { name: "user6", age: 25, prof: "smm", isCloseFriend: false, sex: "female" },
  { name: "rachel", age: 23, prof: "smm", isCloseFriend: true, sex: "female" },
  { name: "user8", age: 14, prof: "smm", isCloseFriend: true, sex: "male" },
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
let someArr = [5, 3, 7, 76, 3, 3, 4, 76, 3, 56, 656];
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
// #13 - Hoisting
function getRepetitionofNumber(numArr, num) {
  // let element;
  // let exampArr = [];
  let counter = 0;

  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] === num) {
      // element = numArr[index];
      // exampArr.push(element);
      counter++;
    }
    // else {
    //   console.log("we haven't num like this => " + num);
    // }
  }

  // console.log("find your num " + num + " " + exampArr.length + " times");
  // console.log(exampArr);

  return counter > 0 ? counter : "даного числа в масиві немає";
}
console.log(getRepetitionofNumber(someArr, 30));

//  #14 - Методи масивів filter/map/reduce та інші
// TASK порахувати жінок і чоловіків
const count = {
  men: 0,
  women: 0,
};
// forEach
subscribers.forEach(function (i) {
  // if (i.sex === 'male') {
  //   count.men++;
  // } else {
  //   count.women++
  // }
  i.sex === "male" ? count.men++ : count.women++;
});
console.log(count);

//filter
const filterAge = subscribers.filter(function (item) {
  return item.age <= 18;
});
console.log(filterAge);
// map
const corectSex = subscribers.map(function (item) {
  return item.sex === "male" ? "Mr. " + item.name : "Mrs. " + item.name;
});
console.log(corectSex);

//reduce
// task визн середній вік користувачів
const avarAge = subscribers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);
console.log(avarAge / subscribers.length);

// find
const foundObj = subscribers.find(function (item) {
  return item.name === "ross 🧑";
});
console.log(foundObj);

//some
const someAge = subscribers.some(function (item) {
  // return item.name === 'ross 🧑';
  return item.age > 20;
});
console.log(someAge); // true

// every
const eveyry = subscribers.find(function (item) {
  return item.age > 2; // true
  // return item.age > 20 ;// false бо не кожному 20 років
});
console.log(eveyry);

// find index
const indexName = subscribers.findIndex(function (item) {
  return item.name === "ross 🧑"; // 0
});
console.log(indexName);

//  #15 - Стрілкові функції (Arrow functions)
// re make on arrow funk =>
const filterAge2 = subscribers.filter((item) => item.age >= 22);
console.log(filterAge2);
