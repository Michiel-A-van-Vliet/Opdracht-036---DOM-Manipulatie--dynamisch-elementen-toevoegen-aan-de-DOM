// Deel 1 - Elementen toevoegen aan de DOM

const buttonsBigFive = document.querySelectorAll(".big-five-button");
const spottedAnimalsList = document.getElementById("spotted-animals-list");

buttonsBigFive.forEach((button) => {
  button.addEventListener("click", function () {
    let clickedAnimal = button.innerHTML;
    let newLi = document.createElement("li");
    newLi.innerHTML = clickedAnimal;
    newLi.setAttribute("class", "spotted-animals-list-item");
    spottedAnimalsList.appendChild(newLi);
  });
});

// Deel 2 - 1 element verwijderen uit de DOM

const buttonRemoveFirst = document.getElementById("remove-first-item-button");
buttonRemoveFirst.addEventListener("click", function () {
  let parent = spottedAnimalsList;
  let child = spottedAnimalsList.getElementsByTagName("li")[0];
  parent.removeChild(child);
});

// Deel 3 - Meerdere element verwijderen uit de DOM

const buttonRemoveAll = document.getElementById("remove-all-button");
buttonRemoveAll.addEventListener("click", function () {
  let parent = spottedAnimalsList;
  parent.innerHTML = "";
});
