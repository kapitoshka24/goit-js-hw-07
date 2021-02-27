const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

function onChangeRange() {
  refs.text.style.fontSize = refs.range.value + "px";
}

refs.range.addEventListener("input", onChangeRange);
