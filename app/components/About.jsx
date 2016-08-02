var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About ReactWeather</h1>
      <p>This is a Weather application built on React.
        I built this for The Complete React Web App Developer Course.
      </p>
      <p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for
              weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  )
}

module.exports = About;
