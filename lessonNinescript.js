const homeElement = document.getElementById("home");
homeElement.style.right = "2.5%"; // Задати відступ від правого краю
homeElement.style.left = "auto"; // Забрати відступ з лівого краю (якщо він був заданий)



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
    paragArr[i].style.color = "yellow";
  }
}
