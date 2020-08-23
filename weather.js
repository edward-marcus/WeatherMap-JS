class Weather {
  constructor(city) {
    this.apiKey = 'de115872ec20d592cbc1bb01d69bac70';
    this.city = city;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang={lang}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  //Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
