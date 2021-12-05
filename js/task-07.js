const elements = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onChangeFontSize = (event) =>
  (elements.text.style.fontSize = `${event.currentTarget.value}px`);

elements.fontSizeControl.addEventListener("input", onChangeFontSize);