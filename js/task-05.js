const elements = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const onChangeName = (event) =>
  (elements.nameOutput.textContent = event.currentTarget.value);

elements.nameInput.addEventListener("input", onChangeName);