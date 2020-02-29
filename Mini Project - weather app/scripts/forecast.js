const key = 'iqFUhJCufsCyfykVD2rnukYrLzOVsYAn';

// First, using Locations API (City Search) to get city code
const getCity = async city => {
  const baseUrl =
    'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

// Second, using Current Conditions API (Current Conditions) to get weather
const getWeather = async cityCode => {
  const baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${cityCode}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data;
};

getCity('Taipei')
  .then(data => {
    // console.log(data);
    return getWeather(data.Key);
  })
  .then(weatherData => {
    console.log(weatherData);
  })
  .catch(error => console.log(error));
