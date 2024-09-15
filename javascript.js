const output = document.querySelector(".weather");
const country = document.querySelector("input");
const temperature = document.querySelector("h2");
async function getWeather() {
  const countryChoice = country.value;
  document.getElementById('loader').style.display = "flex";
  output.textContent = '';
  temperature.textContent = '';
  

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${countryChoice}?key=CPLX9FGBMSJUB2X6UEL74DQ6F `,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.description);
    console.log(weatherData.currentConditions.temp);
    output.textContent = weatherData.description;
    temperature.textContent = weatherData.currentConditions.temp;
  } catch (error) {
    alert(error);

  } finally {
    document.getElementById('loader').style.display ="none";
  }
}
document.querySelector("button").addEventListener("click", getWeather);
