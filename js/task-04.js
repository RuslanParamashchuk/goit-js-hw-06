const elements = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onIncrement() {
  counterValue += 1;
  return (elements.value.textContent = counterValue);
}

function onDecrement() {
  counterValue -= 1;
  return (elements.value.textContent = counterValue);
}

elements.increment.addEventListener("click", onIncrement);
elements.decrement.addEventListener("click", onDecrement);