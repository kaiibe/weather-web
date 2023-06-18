const navIcon = document.querySelector(".nav-icon");
const overlay = document.querySelector(".overlay");

navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open");
  if (overlay.style.height === "100%") {
    overlay.style.height = "0%";
  } else {
    overlay.style.height = "100%";
  }
});

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
  var roleIcon = document.createElement("span");
  roleIcon.className = "iconify selected";
  roleIcon.setAttribute("data-icon", "carbon:user-role");
  var roleText = document.createTextNode(role);
  roleParagraph.appendChild(roleIcon);
  roleParagraph.appendChild(roleText);

  // quill:mail
  var emailParagraph = document.createElement("p");
  var emailIcon = document.createElement("span");
  emailIcon.className = "iconify selected";
  emailIcon.setAttribute("data-icon", "quill:mail");
  var emailText = document.createTextNode(email);
  emailParagraph.appendChild(emailIcon);
  emailParagraph.appendChild(emailText);

  var phoneParagraph = document.createElement("p");
  var phoneIcon = document.createElement("span");
  phoneIcon.className = "iconify selected";
  phoneIcon.setAttribute("data-icon", "solar:phone-linear");
  var phoneText = document.createTextNode(phone);
  phoneParagraph.appendChild(phoneIcon);
  phoneParagraph.appendChild(phoneText);

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
