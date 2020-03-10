class Forecast {
  constructor() {
    this.key = '';
    this.cityURL =
      'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.weatherURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
  }

  async updateCity(city) {
    const cityInfo = await this.getCity(city);
    const weather = await this.getWeather(cityInfo.Key);

    return { cityInfo, weather };
  }

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURL + query);
    const data = await response.json();

    return data[0];
  }

  async getWeather(cityCode) {
    const query = `${cityCode}?apikey=${this.key}`;

    const response = await fetch(this.weatherURL + query);
    const data = await response.json();

    return data[0];
  }
}
