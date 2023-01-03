const baseURL = ('https://api.openweathermap.org/data/2.5/weather?zip=');
const apiKey = ('&appid=07679a828834f0056854e606b1ff9695&units=imperial');
const zipcode = document.querySelector('#zip');
const feelings = document.querySelector('#feelings');

const button = document.querySelector('#generate');
button.addEventListener('click', (event => {
  event.preventDefault();
  const newURL = `${baseURL}${zipcode.value}${apiKey}`
  console.log(newURL);
  fetchAPI(baseURL, apiKey);
}))

const fetchAPI = async (baseURL, apiKey) => {
  const res = await fetch(baseURL+ apiKey)
  try {
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("error", error)
  }
}