/* hometask from 16.06 
створити імпут та кнопку, 
в імпут вводиться ім`я користувача і 
записується у локал сторидж
якщо в локал стoридж вже є iм`я користувача, 
то імпут з кнопкою не показуються, 
а видно параграф зі словами - Привіт, імя користувача. */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");
const body = document.querySelector("body");

btn1.addEventListener("click", () => {
localStorage.setItem("userName", input1.value);
let userInputName = localStorage.getItem("userName");

  if (userInputName === "olha") {
    input1.style.display = "none";
    btn1.style.display = "none";
 
    const newUserPar = document.createElement("p");
    newUserPar.textContent = "Hello " + userInputName;
    body.appendChild(newUserPar);
  } 

});
