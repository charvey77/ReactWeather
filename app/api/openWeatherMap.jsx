var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0d665698d6e044ac2395f6480593e2c5&units=imperial';

// 0d665698d6e044ac2395f6480593e2c5

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // chain the promises to return the expected value (or error)
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        // something went wrong
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }

    }, function(res) {
      // error case
      throw new Error(res.data.message);
    });
  }
}
