const listRef = document.querySelector("#categories");
const itemRef = listRef.children;
console.log(`В списке ${itemRef.length} категории.`);

[...itemRef].forEach((elem) => {
  console.log("Категория: ", elem.querySelector("h2").textContent);
  console.log(
    "Количество элементов: ",
    elem.querySelector("ul").children.length
  );
});
