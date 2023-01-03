const baseURL = ('https://api.openweathermap.org/data/2.5/weather?zip=');
const apiKey = ('07679a828834f0056854e606b1ff9695&units=imperial');

const button = document.querySelector('#generate');
button.addEventListener('click', (event => {
  event.preventDefault();
  console.log("hello!");

}))