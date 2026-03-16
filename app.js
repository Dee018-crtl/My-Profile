// app.js
document.addEventListener("DOMContentLoaded"
, function () {
const addBtn = document.getElementById("addBtn");
addBtn &&
addBtn.addEventListener("click"
, function () {
const text = document.getElementById("task").value.trim();
if (!text) {
alert("Type something useful");
return;
}
});
const li = document.createElement("li");
li.textContent = text;
document.getElementById("tasks").appendChild(li);
document.getElementById("task").value = "";
});