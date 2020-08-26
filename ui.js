class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.coordinates = document.getElementById('w-coordinates');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.feelsLike = document.getElementById('w-feels-like');
    this.icon = document.getElementById('w-icon');

    this.minTemp = document.getElementById('w-min-temp');
    this.maxTemp = document.getElementById('w-max-temp');
    this.humidity = document.getElementById('w-humidity');
    this.clouds = document.getElementById('w-clouds');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = weather.name + ',' + weather.sys.country;
    this.coordinates.textContent =
      'LONG:' +
      weather.coord.lon +
      '°     ' +
      '     LAT:' +
      weather.coord.lat +
      '°';
    this.desc.textContent = weather.weather[0].description.toUpperCase();
    this.string.textContent = weather.main.temp + '\u2103';
    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}\u2103`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.clouds.textContent = `Cloudiness: ${weather.clouds.all}%`;
    this.minTemp.textContent = `Minimum Temperature: ${weather.main.temp_min}\u2103`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max}\u2103`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}m/s (${(
      weather.wind.speed * 2.236936
    ).toFixed(2)}mph)`;
  }
}
