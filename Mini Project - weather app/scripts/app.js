const cityForm = document.querySelector('form');

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
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
});
