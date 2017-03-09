import React from 'react';

// http://api.wunderground.com/api/7b2ba4234a084d95/conditions/q/CA/San_Francisco.json
// https://apigee.com/console/wunderground?req=%7B%22resource%22%3A%22conditions_example%22%2C%22params%22%3A%7B%22query%22%3A%7B%7D%2C%22template%22%3A%7B%22key%22%3A%227b2ba4234a084d95%22%7D%2C%22headers%22%3A%7B%7D%2C%22body%22%3A%7B%22attachmentFormat%22%3A%22mime%22%2C%22attachmentContentDisposition%22%3A%22form-data%22%7D%7D%2C%22verb%22%3A%22get%22%7D


export default class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};
  }


  componentDidMount() {
    this.LoadWeather();
  }

  LoadWeather() {
    fetch('http://api.wunderground.com/api/7b2ba4234a084d95/conditions/q/CA/San_Francisco.json')
      .then(response => response.json())
      .then(json => {
        //console.log(json.current_observation);
        this.setState({
          data: json.current_observation,
        });
      });
  }


  render() {
  	var wind = String(this.state.data.wind_string);
  	wind = wind.charAt(0).toLowerCase() + wind.slice(1);

  	var knots = parseFloat(Math.round(this.state.data.wind_mph * 1.15078 * 100) / 100).toFixed(2);
  	return (
		<div style={{marginLeft: "10px", fontSize: "18px"}}>
			<h1>Weather</h1>
			<br/>
			<div style={indentedStyle}>	
				<p>The weather is {this.state.data.weather} at {this.state.data.temp_f}&deg; and {this.state.data.relative_humidity} humidity.</p>
				<p>The wind is {wind} &#40;{knots} knots at {this.state.data.wind_degrees}&deg;&#41;</p>
			</div>
			<br/>
		</div>
	);
  }
}

const indentedStyle = {
 	marginLeft: "100px",
};

