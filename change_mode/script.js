// const btn = document.querySelector("#Btn");
// let currMode = "light";

// btn.addEventListener("click", () => {
//   if (currMode === "light") {
//     currMode = "dark";
//     document.body.style.backgroundColor = "#fff";
//     btn.innerText = "DarkMode";
//   } else {
//     currMode = "light";
//     document.body.style.backgroundColor = "#222";
//     btn.innerText = "LightMode";
//   }
// });


const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const para = document.querySelector("#para");
let counter = 0;

addBtn.addEventListener('click', () => {
  if (counter < 20) {
    counter++;
    para.innerText = `Counting: ${counter}`
    // addBtn.innerText = `Add: ${counter}`
  }
})

minusBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    para.innerText = `Counting: ${counter}`
    // minusBtn.innerText = `Minus: ${counter}`
  }
})