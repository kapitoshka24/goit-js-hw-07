const refs = {
  number: document.querySelector("input"),
  render: document.querySelector("#controls [data-action='render']"),
  destroy: document.querySelector("#controls [data-action='destroy']"),
  boxes: document.querySelector("#boxes"),
};

let amountOfBoxes = 0;
refs.number.addEventListener("input", (event) => {
  amountOfBoxes = event.currentTarget.value;
});

function rgb_rand() {
  return (
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")"
  );
}

function createBoxes() {
  let start = 0;
  let amount = [...refs.boxes.children].length;

  amount === 0
    ? (start = 30)
    : (start = Number.parseInt(refs.boxes.lastElementChild.style.width) + 10);

  for (let i = 0; i < amountOfBoxes; i += 1) {
    refs.boxes.classList.add("boxes");

    const box = document.createElement("div");
    box.style.width = start + "px";
    box.style.height = start + "px";
    box.style.backgroundColor = rgb_rand();
    box.style.margin = "10px";
    refs.boxes.append(box);

    start += 10;
  }
}

function clearBoxes() {
  [...refs.boxes.children].forEach((elem) => elem.remove());
  refs.number.value = "";
}

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", clearBoxes);
