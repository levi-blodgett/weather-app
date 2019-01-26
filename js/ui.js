class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.cloudiness = document.getElementById('w-cloudiness');
    this.wind = document.getElementById('w-wind');
    this.minimum = document.getElementById('w-min-temp');
    this.maximum = document.getElementById('w-max-temp');
  }


  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "℉";
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.cloudiness.textContent = `Cloudiness: ${weather.clouds.all} %`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
    this.minimum.textContent = `Minimum Temperature: ${weather.main.temp_min} ℉`;
    this.maximum.textContent = `Maximum Temperature: ${weather.main.temp_max} ℉`;
  }
}