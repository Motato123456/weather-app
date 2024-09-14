const output = document.querySelector('.weather');
const country = document.querySelector('input')
const temperature = document.querySelector('h2')
async function getWeather() {
  const countryChoice = country.value;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${countryChoice}?key=CPLX9FGBMSJUB2X6UEL74DQ6F `,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData)
  console.log(weatherData.description);
  console.log(weatherData.currentConditions.temp);
  output.textContent = weatherData.description;
  temperature.textContent = weatherData.currentConditions.temp;

}
document.querySelector('button').addEventListener('click', getWeather)


// document
//   .querySelector("#submitbtn")
//   .addEventListener("click", function () {
//     let input = document.querySelector("#textInput").value;
//     fetch(
//       `https://api.giphy.com/v1/gifs/translate?api_key=VUQ6Z4bRxGhLNYocLUikzfeu1h63XXRW&s=${input}`,
//       { mode: "cors" }
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (response) {
//         if (response.data.length == 0) {
//           throw new Error("No gifs for search term");
//         } else {
//           img.src = response.data.images.original.url;
//         }
//       })
//       .catch(function(error){
//         errormsg.textContent = "error"

//       });
//   });