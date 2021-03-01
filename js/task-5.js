const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

function onEnteringName(event) {
  const value = event.currentTarget.value;

  refs.output.textContent =
    value !== " ".repeat(value.length) ? value : "незнакомец";
}

refs.input.addEventListener("input", onEnteringName);
