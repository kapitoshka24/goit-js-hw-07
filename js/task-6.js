const inputRef = document.querySelector("#validation-input");
const inputLengthRef = Number(inputRef.dataset.length);

let keyLength = 0;

inputRef.addEventListener("input", (event) => {
  keyLength = event.currentTarget.value.length;
});

function onInputOut() {
  keyLength === inputLengthRef
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}

inputRef.addEventListener("blur", onInputOut);
