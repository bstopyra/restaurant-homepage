function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("main");

  const about = document.createElement("div");
  about.classList.add("about");

  const paragraph = document.createElement("p");
  paragraph.classList.add("about__text");
  paragraph.innerHTML = "Menu!";
  about.appendChild(paragraph);

  const chefImg = document.createElement("img");
  chefImg.src = "./images/chef.png";

  chefImg.classList.add("about__chef");
  about.appendChild(chefImg);

  menu.appendChild(about);

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
