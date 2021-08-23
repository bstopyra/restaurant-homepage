import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createWrapper() {
  const home = document.createElement("div");
  home.classList.add("home");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  const homeTitle = document.createElement("h1");
  homeTitle.setAttribute("id","title")
  homeTitle.textContent = "Some sample restaurant page!";

  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("nav-button");
  aboutButton.textContent = "About";
  aboutButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(aboutButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  navBar.appendChild(aboutButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  wrapper.appendChild(homeTitle);
  wrapper.appendChild(navBar);
  home.appendChild(wrapper);

  return home;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWeb() {
  const content = document.getElementById("content");
  content.appendChild(createWrapper());
  content.appendChild(createMain());
  setActiveButton(document.querySelector(".nav-button"));
  loadHome();
}

export default initializeWeb;
