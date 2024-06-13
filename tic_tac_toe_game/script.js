let turn = true; // player 0
const msg = document.querySelector(".msg");
let button = document.querySelectorAll(".cell");
const startbtn = document.querySelector("#startBtn");

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableBtn = () => {
  for (box of button) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of button) {
    box.disabled = false;
    box.innerText = "";
  }
};
const checkWinner = () => {
  for (pattern of winningPattern) {
    let pos1 = button[pattern[0]].innerText;
    let pos2 = button[pattern[1]].innerText;
    let pos3 = button[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        if (pos1 === "0") {
          msg.innerText = "Player1 Wins";
          msg.classList.remove("hide");
        } else {
          msg.innerText = "Player2 Wins";
          msg.classList.remove("hide");
        }

        disableBtn();
      }
    }
  }
};

startbtn.addEventListener("click", () => {
  turn = true;
  enableBtn();
  msg.classList.add("hide");
});

button.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "0";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
