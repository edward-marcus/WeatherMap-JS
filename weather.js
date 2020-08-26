var mykey = config.MY_KEY;
class Weather {
  constructor(city) {
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&lang={lang}&units=metric&appid=${mykey}`
    );

    const responseData = await response.json();
    return responseData;
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
