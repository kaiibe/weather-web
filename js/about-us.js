function showPersonInfo(name, role, email, phone) {
  var overlay = document.createElement("div");
  overlay.classList.add("personal-card-overlay");

  var card = document.createElement("div");
  card.classList.add("personal-card");

  var closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";

  var heading = document.createElement("h2");
  heading.textContent = name;

  var roleParagraph = document.createElement("p");
  roleParagraph.textContent = role;

  var emailParagraph = document.createElement("p");
  emailParagraph.textContent = email;

  var phoneParagraph = document.createElement("p");
  phoneParagraph.textContent = phone;

  card.appendChild(closeButton);
  card.appendChild(heading);
  card.appendChild(roleParagraph);
  card.appendChild(emailParagraph);
  card.appendChild(phoneParagraph);

  document.body.appendChild(overlay);
  document.body.appendChild(card);

  closeButton.addEventListener("click", function () {
    card.classList.add("hide-personal-card");

    setTimeout(function () {
      document.body.removeChild(overlay);
    }, 200);

    setTimeout(function () {
      document.body.removeChild(card);
    }, 400);
  });

  overlay.addEventListener("click", function () {
    card.classList.add("hide-personal-card");

    setTimeout(function () {
      document.body.removeChild(overlay);
    }, 200);

    setTimeout(function () {
      document.body.removeChild(card);
    }, 400);
  });
}
