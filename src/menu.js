const pizzaMenu = [
  {
    id: 1,
    name: "Ham Pizza",
    description: "Ham, Tomato, Garlic",
  },
  {
    id: 2,
    name: "Shrimp Pizza",
    description: "Shrimp, Olives, Feta Cheese",
  },
  {
    id: 3,
    name: "Bacon Pizza",
    description: "Ham, Bacon, Garlic, Paprika",
  },
  {
    id: 4,
    name: "Vege Pizza",
    description: "Tomato, Onion, Feta Cheese",
  },
];

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("main");

  const about = document.createElement("div");
  about.classList.add("menu");

  for (let i = 0; i < pizzaMenu.length; i++) {
    const menuPosition = document.createElement("div");
    menuPosition.classList.add("menu-position");

    const pizzaImg = document.createElement("img");
    pizzaImg.classList.add("pizza");
    pizzaImg.src = `images/pizza-${i + 1}.png`;

    const pizzaDescription = document.createElement("div");
    pizzaDescription.classList.add("pizza-desc");

    const pizzaTitle = document.createElement("h2");
    pizzaTitle.textContent = pizzaMenu[i].name;

    const pizzaIngredients = document.createElement("p");
    pizzaIngredients.textContent = pizzaMenu[i].description;

    menuPosition.appendChild(pizzaImg);
    pizzaDescription.appendChild(pizzaTitle);
    pizzaDescription.appendChild(pizzaIngredients);
    menuPosition.appendChild(pizzaDescription);
    about.appendChild(menuPosition);
  }

  menu.appendChild(about);

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
