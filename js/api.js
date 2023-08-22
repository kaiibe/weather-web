var apiKey = "89a2173d9e7a8557d64eab9d8889aaea";      // Paste you API key here

async function fetchWeatherData(latitude, longitude) {
  try {
    var apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    var response = await fetch(apiUrl);
    var data = await response.json();

    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function checkCity(inputCity, latitude, longitude) {
  if (inputCity == null) {
    const apiUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`;
    var response = await fetch(apiUrl);
    var data = await response.json();
    final = `${data[0].name}, ${data[0].country}`;

    return [data[0]["lat"], data[0]["lon"], final];
  } else {
    try {
      var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=${apiKey}`;
      var response = await fetch(apiUrl);
      var data = await response.json();
      final = `${data[0].name}, ${data[0].country}`;

      return [data[0]["lat"], data[0]["lon"], final];
    } catch (error) {
      console.log("Error:", error);
      return false;
    }
  }
}
