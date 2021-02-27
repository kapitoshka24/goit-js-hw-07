const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

function onEnteringName(event) {
  const value = event.currentTarget.value;

  value !== " ".repeat(value.length)
    ? (refs.output.textContent = value)
    : (refs.output.textContent = "незнакомец");
}

refs.input.addEventListener("input", onEnteringName);
