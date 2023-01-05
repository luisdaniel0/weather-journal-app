let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const baseURL = ('https://api.openweathermap.org/data/2.5/weather?zip=');
const apiKey = ('&appid=07679a828834f0056854e606b1ff9695&units=imperial');
const zipcode = document.querySelector('#zip');
const feelings = document.querySelector('#feelings');
const temp = document.querySelector('#temp');
const name = document.querySelector('#name');
const button = document.querySelector('#generate');
const feels_like = document.querySelector('#feels_like');
const content = document.querySelector('#content');
const weather = document.querySelector('#weather');

button.addEventListener("click", (e) => {
  e.preventDefault();
  const madeURL = `${baseURL}${zip.value}${apiKey}`;
  //fetch the url and get the data the needs to be sliced
  fetchAPI(madeURL)
    .then((data) => {
      extractData(data)
        .then((info) => {
          postData('http://localhost:8000/add', info)
        })
    })
});



const fetchAPI = async (urlApi) => {
  try {
    const res = await fetch(urlApi);
    const data = await res.json();
    if (data.id != 0) {
      console.log(data)
      return data;

    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const extractData = async (data) => {
  try {
    if (data.id != 0) {
      console.log(data);
      return data;
    }

    const content = {
      date: newDate,
      name: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      content: feelings.value,
      weather: data.weather[0].main
    };
    console.log(content);
    return content;

  } catch (error) {
    console.log(error);
  }
};

const postData = async (url = '', data = {}) => {
  
    const response = await fetch(url, {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }); 
    const result = await response.json();
    console.log(result);
    return result;
 
};


