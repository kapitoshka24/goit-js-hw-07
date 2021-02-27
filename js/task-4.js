let counterValue = 0;

const refs = {
  increment: document.querySelector("#counter [data-action='increment']"),
  decrement: document.querySelector("#counter [data-action='decrement']"),
  value: document.querySelector("#value"),
};

function onIncrement() {
  refs.value.textContent = counterValue + 1;
  counterValue += 1;
}
function onDecrement() {
  refs.value.textContent = counterValue - 1;
  counterValue -= 1;
}

refs.increment.addEventListener("click", onIncrement);
refs.decrement.addEventListener("click", onDecrement);
