// Initialize storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);
//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // const state = document.getElementById('state').value;

  //Set location in local storage
  storage.setLocationData(city);

  weather.changeLocation(city);
  console.log(city);
  //Get and display the weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
