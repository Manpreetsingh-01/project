const btn = document.querySelector("#add-btn");
const task = document.querySelector("#input-box");
const listItem = document.querySelector("#list-container");

btn.addEventListener("click", () => {
  if (task.value === "") {
    alert("please enter some task");
  } else {
    const li = document.createElement("li");
    listItem.appendChild(li);
    li.innerHTML = task.value;
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = "\u00d7";
    task.value = "";
    saveData();
  }

  //   li.addEventListener("click", () => {
  //     if (!textLine) {
  //       li.classList.add("checked");
  //       textLine = true;                                   this part was working fine
  //     } else {
  //       li.classList.remove("checked");
  //       textLine = false;
  //     }

  //     span.addEventListener("click", () => {
  //       listItem.removeChild(li);                     but i cant remove li using this
  //       li.removeChild(span);
  //     });
  //   });
});

listItem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listItem.innerHTML);
}

function showTask() {
  listItem.innerHTML = localStorage.getItem("data");
}

showTask();
