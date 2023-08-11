function createMain(model) {
  var main = $("<main>");
  var container = $("<div>").addClass("container").appendTo(main);

  var content_left = $("<div>").addClass("content-left").appendTo(container);
  var current_weather = createCurrentWeather(model).appendTo(content_left);
  $("<section>")
    .addClass("h2")
    .appendTo(content_left);
  var daily_forecast = createDailyForecast(model).appendTo(content_left);

  var content_right = $("<div>").addClass("content-right").appendTo(container);
  var air_condition = createAirCondition(model).appendTo(content_right);
  $("<section>")
    .addClass("h2")
    .appendTo(content_right);
  var hourly_forecast = createHourlyForecast(model).appendTo(content_right);

  return main;
}

function createCurrentWeather(model) {
  var current_weather = $("<section>").addClass("current-weather");
  var card = $("<div>").addClass("card").appendTo(current_weather);
  card.append($("<h2>Current Weather</h2>"));
  var weather = $("<div>").addClass("weather").appendTo(card);
  $(`<p>${model.celsiusTemperature}</p>`).appendTo(weather);
  $('<img src="./assets/img/03d.png" alt="">').appendTo(weather);
  $(`<p>${model.weatherCondition}</p>`).appendTo(card);

  var list = $("<ul>").appendTo(card);
  var listItem1 = $("<li>").appendTo(list);
  listItem1.append(
    `<span class="iconify selected" data-icon="mdi:calendar-multiselect-outline"></span> ${model.currentDate}`
  );
  var listItem2 = $("<li>").appendTo(list);
  listItem2.append(
    `<span class="iconify selected"data-icon="material-symbols:location-on-outline-rounded"></span> ${model.cityName}`
  );

  return current_weather;
}

function createDailyForecast(model) {
  var daily_forecast = $("<section>").addClass("daily-forecast");
  var card = $("<div>").addClass("card").appendTo(daily_forecast);

  var list = $("<ul>").appendTo(card);

  for (var i = 0; i < 7; i++) {
    var listItem = $("<li>").appendTo(list);
    listItem.append($(`<p>${model.dailyForecast[i][0]}</p>`));
    listItem.append(
      $(
        `<p>${model.dailyForecast[i][1]}/<span>${model.dailyForecast[i][2]}</span></p>`
      )
    );
    listItem.append(
      $(`<img src="./assets/img/${model.dailyForecast[i][3]}.png" alt="">`)
    );
  }

  return daily_forecast;
}

function createLongWidget(model) {
  var list = $("<ul>").addClass("long");
  listItem1 = $("<li>").appendTo(list);
  sunrise = $("<div>").addClass("sunrise").appendTo(listItem1);
  sunrise.append($("<h3>Sunrise</h3>"));
  var sunrise_card = $("<div>").addClass("card").appendTo(sunrise);
  sunrise_card.append(
    "<span class='iconify' data-icon='solar:sunrise-broken'></span>"
  );
  sunrise_card.append(`<p>${model.sunrise}</p>`);

  listItem2 = $("<li>").appendTo(list);
  sunset = $("<div>").addClass("sunset").appendTo(listItem2);
  sunset.append($("<h3>Sunset</h3>"));
  var sunset_card = $("<div>").addClass("card").appendTo(sunset);
  sunset_card.append(
    "<span class='iconify' data-icon='solar:sunset-broken'></span>"
  );
  sunset_card.append(`<p>${model.sunset}</p>`);

  return list;
}

function createShortWidget(model) {
  var list = $("<ul>").addClass("short");

  feels_like = $("<li>").appendTo(list);
  feels_like_box = $("<div>").addClass("box").appendTo(feels_like);
  feels_like_box.append($("<h3>Feels Like</h3>"));
  feels_like_card = $("<div>").addClass("card").appendTo(feels_like_box);
  feels_like_card.append(
    '<span class="iconify" data-icon="bi:thermometer-half"></span>'
  );
  feels_like_card.append($(`<p>${model.feelsLike}</p>`));

  humidity = $("<li>").appendTo(list);
  humidity_box = $("<div>").addClass("box").appendTo(humidity);
  humidity_box.append($("<h3>Humidity</h3>"));
  humidity_card = $("<div>").addClass("card").appendTo(humidity_box);
  humidity_card.append(
    '<span class="iconify" data-icon="carbon:humidity-alt"></span>'
  );
  humidity_card.append($(`<p>${model.humidity}</p>`));

  wind_speed = $("<li>").appendTo(list);
  wind_speed_box = $("<div>").addClass("box").appendTo(wind_speed);
  wind_speed_box.append($("<h3>Wind Speed</h3>"));
  wind_speed_card = $("<div>").addClass("card").appendTo(wind_speed_box);
  wind_speed_card.append('<span class="iconify" data-icon="ph:wind"></span>');
  wind_speed_card.append($(`<p>${model.windSpeed}</p>`));

  uv_index = $("<li>").appendTo(list);
  uv_index_box = $("<div>").addClass("box").appendTo(uv_index);
  uv_index_box.append($("<h3>UV Index</h3>"));
  uv_index_card = $("<div>").addClass("card").appendTo(uv_index_box);
  uv_index_card.append(
    '<span class="iconify" data-icon="ph:sun-horizon"></span>'
  );
  uv_index_card.append($(`<p>${model.uvi}</p>`));

  return list;
}

function createAirCondition(model) {
  var air_condition = $("<section>").addClass("air-condition");
  var container = $("<div>").addClass("container").appendTo(air_condition);

  container.append(createLongWidget(model));
  container.append(createShortWidget(model));

  return air_condition;
}

function createHourlyForecast(model) {
  var hourly_forecast = $("<section>").addClass("hourly-forecast");
  var hourly_forecast_container = $("<div>")
    .addClass("container")
    .appendTo(hourly_forecast);

  var dailyForecastListOne = model.dailyForecastListOne;
  var list = $("<ul>");
  for (var i = 0; i < 7; i++) {
    var list_item = $("<li>").appendTo(list);
    list_item.append(`<p>${dailyForecastListOne[i][0]}</p>`);
    list_item.append(
      `<img src="./assets/img/${dailyForecastListOne[i][1]}.png" alt="">`
    );
    list_item.append(`<p>${dailyForecastListOne[i][2]}</p>`);
  }
  hourly_forecast_container.append(list);

  var dailyForecastListTwo = model.dailyForecastListTwo;
  var list = $("<ul>");
  for (var i = 0; i < 7; i++) {
    var list_item = $("<li>").appendTo(list);
    list_item.append(`<p>${dailyForecastListTwo[i][0]}</p>`);
    list_item.append(
      `<img src="./assets/img/${dailyForecastListTwo[i][1]}.png" alt="">`
    );
    list_item.append(`<p>${dailyForecastListTwo[i][2]}</p>`);
  }
  hourly_forecast_container.append(list);

  return hourly_forecast;
}

