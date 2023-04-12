// document.getElementById("count-el").innerText = 5;
let count = 0;
let records = "";
let countEl = document.getElementById("count-el");
let recordsEl = document.getElementById("records");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  records = records + count + " - ";
  recordsEl.innerText = records;
  count = 0;
  countEl.innerText = 0;
}
