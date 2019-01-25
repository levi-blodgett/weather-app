class Weather {
  constructor(city, state) {
    this.apiKey = 'acfaa97e3a5ebca90f088482cdda4664';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json;

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}