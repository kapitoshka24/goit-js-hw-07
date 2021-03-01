const refs = {
  number: document.querySelector("input"),
  render: document.querySelector("#controls [data-action='render']"),
  destroy: document.querySelector("#controls [data-action='destroy']"),
  boxes: document.querySelector("#boxes"),
};

let amount = 0;
refs.number.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

function rgb_rand() {
  const getRandomRGB = () => Math.round(Math.random() * 255);

  return `rgb(
    ${getRandomRGB()},
    ${getRandomRGB()},
    ${getRandomRGB()}
    )`;
}

function createBoxes() {
  let amountOfBoxes = [...refs.boxes.children].length;

  let start =
    amountOfBoxes === 0
      ? 30
      : Number.parseInt(refs.boxes.lastElementChild.style.width) + 10;

  for (let i = 0; i < amount; i += 1) {
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
  amount = 0;
}

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", clearBoxes);
