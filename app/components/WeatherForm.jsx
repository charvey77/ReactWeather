var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault(); // stop page from reloading on form submit

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = ''; // clear the location input field
      this.props.onSearch(location);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter City"/><br />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
