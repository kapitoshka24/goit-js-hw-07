const inputRef = document.querySelector("#validation-input");
const inputLengthRef = Number(inputRef.dataset.length);

let keyLength = 0;

inputRef.addEventListener("input", (event) => {
  keyLength = event.currentTarget.value.length;
});

function onInputOut() {
  if (keyLength === inputLengthRef) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", onInputOut);
