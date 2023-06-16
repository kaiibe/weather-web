$(document).ready(function () {
  var videos = [
    document.getElementById("video1"),
    document.getElementById("video2"),
    document.getElementById("video3"),
    document.getElementById("video4"),
    document.getElementById("video5"),
    document.getElementById("video6"),
    // document.getElementById("video7"),
    // document.getElementById("video8"),
    // document.getElementById("video9"),
    // document.getElementById("video10"),
  ];
  var currentVideoIndex = 0;

  function playNextVideo() {
    if (currentVideoIndex == videos.length) {
      currentVideoIndex = 0;
    }

    var currentVideo = videos[currentVideoIndex];
    currentVideo.play();
    currentVideo.onended = function () {
      currentVideoIndex++;
      playNextVideo();
    };
  }

  playNextVideo();
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
