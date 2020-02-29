const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = data => {
  // const cityInfo = data.cityInfo;
  // const weather = data.weather;

  //! destructuring: easy way to get properties from an object and store them in a constance in a same name
  const { cityInfo, weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather[0].WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather[0].Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // remove d-none if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};
const updateCity = async city => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  // return {
  //   cityInfo: cityInfo,
  //   weather: weather,
  // };

  //! object shorthand notation (when property name and value are the same)
  return { cityInfo, weather };
};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city value and empty input field
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));
});
