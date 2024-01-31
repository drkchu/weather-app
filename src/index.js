// Importing styles
import './styles/styles.css'

// This function takes in an API call and returns the JSON object
// Doesn't account for checks since I'm just doing this to practice :D
async function weatherProcessorJSON(url) {
    try {
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        return data
    } catch (error) {
        // Handling errors
        alert("Something went wrong!")
    }
}

const searchButton = document.querySelector('.weather-search')
const countryDiv = document.querySelector('.country')
const regionDiv = document.querySelector('.region')
const temperatureDiv = document.querySelector('.temperature')
const APILink = 'https://api.weatherapi.com/v1/current.json?key=a37dd5f12bbe456691d213231241601&q='
searchButton.addEventListener('click', () => {
    const currentCity = document.querySelector('.weather-input').value;
    let country, region, temperature;

    weatherProcessorJSON(APILink + currentCity).then((json) => {
        console.log(json)

        country = json.location.country
        region = json.location.region
        temperature = json.current.temp_c

        countryDiv.textContent = `COUNTRY: ${country}`
        regionDiv.textContent = `REGION: ${region}`
        temperatureDiv.textContent = `TEMP IN CELSIUS: ${temperature}`
    })
});