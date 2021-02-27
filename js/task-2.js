const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createListElems = ingredients.map((elem) => {
  const linkRef = document.createElement("li");
  linkRef.textContent = elem;
  return linkRef;
});

const listRef = document.querySelector("#ingredients");
listRef.append(...createListElems);
