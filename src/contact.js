function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact__info");

  const phoneDetails = document.createElement("div");
  phoneDetails.classList.add("contact__details");

  const phoneIcon = document.createElement("img");
  phoneIcon.src = "./images/phone-icon.png";
  phoneIcon.classList.add("icon");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-456-789";

  const emailDetails = document.createElement("div");
  emailDetails.classList.add("contact__details");

  const emailIcon = document.createElement("img");
  emailIcon.src = "./images/email-icon.png";
  emailIcon.classList.add("icon");

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "restaurant@restaurant.com";

  phoneDetails.appendChild(phoneIcon);
  phoneDetails.appendChild(phoneNumber);

  emailDetails.appendChild(emailIcon);
  emailDetails.appendChild(emailAddress);

  contactInfo.appendChild(phoneDetails);
  contactInfo.appendChild(emailDetails);

  contact.appendChild(contactInfo);

  const contactMap = document.createElement("div");
  contactMap.classList.add("contact__map");
  contactMap.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20026.407932818023!2d17.061659249999998!3d51.1398004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e40c57467f87b%3A0xe72be8d8d320d5d8!2sRynek%20-%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1629723611668!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  contact.appendChild(contactMap);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
