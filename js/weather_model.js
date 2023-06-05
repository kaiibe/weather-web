function WeatherModel(weatherData, cityName) {
  this.lat = weatherData["lat"];
  this.lon = weatherData["lon"];
  this.currentDate = setCurrentDate();
  this.celsiusTemperature = setTemperature(weatherData);
  this.weatherCondition = setWeatherCondition(weatherData);
  this.cityName = cityName;
  this.dailyForecast = setDailyForecast(weatherData);
  this.sunrise = setSunrise(weatherData);
  this.sunset = setSunset(weatherData);
  this.feelsLike = setFeelsLike(weatherData);
  this.humidity = setHumidity(weatherData);
  this.windSpeed = setWindSpeed(weatherData);
  this.uvi = setUVIndex(weatherData);
  this.dailyForecastListOne = setDailyForecastOne(weatherData);
  this.dailyForecastListTwo = setDailyForecastTwo(weatherData);
}

function setTemperature(weatherData) {
  celsiusTemp = Math.round(weatherData["current"]["temp"] - 273.15);
  celsiusTemp = `${celsiusTemp}°`;
  return celsiusTemp;
}

function setWeatherCondition(weatherData) {
  let weatherCondition = weatherData.current.weather[0].description;
  weatherCondition = weatherCondition.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );
  return weatherCondition;
}

function setCurrentDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];

  return `${dayOfWeek} ${dayOfMonth}, ${month}`;
}

function setDailyForecast(weatherData) {
  dailyForecast = [];

  for (var i = 0; i < 7; i++) {
    cnt = [];

    const timestamp = weatherData["daily"][i]["dt"] * 1000;
    const dateTime = new Date(timestamp);
    const weekday = dateTime.toLocaleDateString("en-US", { weekday: "long" });
    const abbreviatedWeekday = abbreviateWeekday(weekday);

    const minC = Math.round(weatherData["daily"][i]["temp"]["min"] - 273.15);
    const maxC = Math.round(weatherData["daily"][i]["temp"]["max"] - 273.15);
    const icon = weatherData["daily"][i]["weather"][0]["icon"];

    cnt.push(abbreviatedWeekday);
    cnt.push(`${minC}°`);
    cnt.push(`${maxC}°`);
    cnt.push(icon);

    dailyForecast.push(cnt);
  }

  return dailyForecast;
}

function abbreviateWeekday(weekday) {
  const weekdays = {
    Monday: "Mon.",
    Tuesday: "Tue.",
    Wednesday: "Wed.",
    Thursday: "Thu.",
    Friday: "Fri.",
    Saturday: "Sat.",
    Sunday: "Sun.",
  };

  return weekdays[weekday] || weekday;
}

function setSunrise(weatherData) {
  var timestamp = weatherData["current"]["sunrise"];
  const date = new Date(timestamp * 1000);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeFormat = date.toLocaleString("en-US", options);

  return timeFormat;
}

function setSunset(weatherData) {
  var timestamp = weatherData["current"]["sunset"];
  const date = new Date(timestamp * 1000);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeFormat = date.toLocaleString("en-US", options);

  return timeFormat;
}

function setFeelsLike(weatherData) {
  var celsiusTemp = Math.round(weatherData["current"]["feels_like"] - 273.15);
  var feelsLikeCelsius = `${celsiusTemp}°`;

  return feelsLikeCelsius;
}

function setHumidity(weatherData) {
  var humidityTemp = weatherData["current"]["humidity"];
  var humidity = `${humidityTemp} %`;

  return humidity;
}

function setWindSpeed(weatherData) {
  var wind = Math.round(weatherData["current"]["wind_speed"]);

  windSpeed = `${wind} km/h`;
  return windSpeed;
}

function setUVIndex(weatherData) {
  var uvi = Math.round(weatherData["current"]["uvi"]);

  return uvi;
}

function setDailyForecastOne(weatherData) {
  var dailyForecastList = [];
  for (var i = 0; i < 7; i++) {
    cnt = [];

    var time = Math.round(weatherData["hourly"][i]["dt"] * 1000);
    var timeDate = new Date(time);
    var options = { hour: "numeric", hour12: true };

    var timeTime = timeDate
      .toLocaleTimeString("en-US", options)
      .replace(":00", "");

    var icon = weatherData["hourly"][i]["weather"][0]["icon"];

    var celsiusTemp = Math.round(weatherData["hourly"][i]["temp"] - 273.15);
    var celsiusTemp = `${celsiusTemp}°`;

    cnt.push(timeTime);
    cnt.push(icon);
    cnt.push(celsiusTemp);

    dailyForecastList.push(cnt);
  }

  return dailyForecastList;
}

function setDailyForecastTwo(weatherData) {
  var dailyForecastList = [];
  for (var i = 7; i < 14; i++) {
    var cnt = [];

    var time = Math.round(weatherData["hourly"][i]["dt"] * 1000);
    var timeDate = new Date(time);
    var options = { hour: "numeric", hour12: true };

    var timeTime = timeDate
      .toLocaleTimeString("en-US", options)
      .replace(":00", "");

    var celsiusTemp = Math.round(weatherData["hourly"][i]["temp"] - 273.15);
    var celsiusTemp = `${celsiusTemp}°`;

    var icon = weatherData["hourly"][i]["weather"][0]["icon"];

    cnt.push(timeTime);
    cnt.push(icon);
    cnt.push(celsiusTemp);

    dailyForecastList.push(cnt);
  }

  return dailyForecastList;
}
