const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(ev) {
  // this allows the drop location to know which element is being moved when you release it
  ev.dataTransfer.setData("text/plain", this.id);
}

function dragEnd(ev) {
  this.classList.add("over");
}

function dragOver(ev) {
  // this line is important because by default, browsers don't allow you to drop elements onto other elements.
  ev.preventDefault();
}

function dragEnter(ev) {
  ev.preventDefault();
  this.classList.add("over");
}

function dragLeave(ev) {
  this.classList.remove("over");
}

function dragDrop(ev) {
  const id = ev.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);
  this.classList.remove("over");
}
