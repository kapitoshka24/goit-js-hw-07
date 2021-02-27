const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

function onEnteringName(event) {
  refs.output.textContent = event.currentTarget.value;
}

refs.input.addEventListener("input", onEnteringName);
