const navIcon = document.querySelector(".nav-icon");
const overlay = document.querySelector(".overlay");

var searchInput = document.getElementById("search-input");
var mobileSearchInput = document.getElementById("mobile-search-input");
var myLocationButton = document.getElementById("my-location-button");

$(document).ready(function () {
  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("open");
    if (overlay.style.height === "100%") {
      overlay.style.height = "0%";
    } else {
      overlay.style.height = "100%";
    }
  });

  CurrentWeather();

  searchInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      var inputCity = searchInput.value;
      searchInput.value = "";

      CityWeather(inputCity);
    }
  });

  mobileSearchInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      var inputCity = mobileSearchInput.value;
      mobileSearchInput.value = "";

      CityWeather(inputCity);
    }
  });

  myLocationButton.addEventListener("click", function (event) {
    CurrentWeather();
  });
});

function CurrentWeather() {
  $("main").remove();

  var progressBar = $(
    '<div class="loading"><div class="progress-bar"></div></div>'
  );
  $("body").append(progressBar);

  (async function () {
    try {
      var position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      var valid_city = await checkCity(null, latitude, longitude);

      var data = await fetchWeatherData(latitude, longitude);
      var model = new WeatherModel(data, valid_city[2]);

      progressBar.remove();

      $("body").append(createMain(model));
    } catch (error) {
      progressBar.remove();
      var blockedLocation = $(
        '<main><div class="blocked-location"><div class="card"><img src="./assets/img/no-location.png" alt=""><h1>Permission was denied</h1><h2>Allow it, or just search for a city</h2></div></div></main>'
      );
      $("body").append(blockedLocation);
    }
  })();
}

async function CityWeather(inputCity) {
  
  var valid_city = await checkCity(inputCity, null, null);

  if (valid_city == false) {
  } else {
    $("main").remove();

    var progressBar = $(
      '<div class="loading"><div class="progress-bar"></div></div>'
    );
    $("body").append(progressBar);

    latitude = valid_city[0];
    longitude = valid_city[1];
    fullCity = valid_city[2];

    var data = await fetchWeatherData(latitude, longitude);
    var model = new WeatherModel(data, fullCity);

    progressBar.remove();

    $("body").append(createMain(model));
  }
}
