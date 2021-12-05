const el = {
  changeColor: document.querySelector(".change-color"),
  selectedColor: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  el.selectedColor.textContent = getRandomHexColor();
}

el.chengeColor.addEventListener("click", onColorChange);
