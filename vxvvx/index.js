const items = document.querySelectorAll(".item");
const textBox = document.querySelector(".textBox");
const submitButton = document.querySelector(".submitButton");
const header = document.getElementById("title");
function createNewListItem(str) {
  const li = document.createElement("li");
  li.innerText = str;
  li.setAttribute("class", "item");
  document.getElementById("list").appendChild(li);
  li.addEventListener("click", () => scoreItemOut(li));
}

submitButton.addEventListener("click", () => {
  createNewListItem(textBox.value);
});

const scoreItemOut = (item) => {
  if (item.className === "item") {
    item.className = "item-checked";
  } else if (item.className === "item-checked") {
    item.className = "item";
  }
};

items.forEach((item) => {
  item.addEventListener("click", () => {
    scoreItemOut(item);
  });
});

console.dir(header);

header.addEventListener("click", () => {
  const newHead = document.createElement("h2");
  newHead.innerText = "CONGRATS THE SECRET HEADER IS UNLOCKED";
  newHead.setAttribute("class", "secretHeader");
  document.body.appendChild(newHead);
});
