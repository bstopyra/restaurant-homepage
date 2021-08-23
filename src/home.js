function createHome() {
  const home = document.createElement("div");
  home.classList.add("main");

  const about = document.createElement("div");
  about.classList.add("about");

  const paragraph = document.createElement("p");
  paragraph.classList.add("about__text");
  paragraph.innerHTML =
    "Best food on this planet" + "<br>" + "Just look at that guy!";
  about.appendChild(paragraph);

  const chefImg = document.createElement("img");
  chefImg.src = "./images/chef.png";

  chefImg.classList.add("about__chef");
  about.appendChild(chefImg);

  home.appendChild(about);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
