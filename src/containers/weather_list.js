import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData){
		let temps = cityData.list.map(weather => weather.main.temp);
		temps = temps.map(data => data - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat; 

		return (
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temps} color="orange" units="°C" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>	
					<Chart data={humidity} color="black" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Termperature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}


function mapStateToProps(state){
	return {weather : state.weather};
}

export default connect(mapStateToProps)(WeatherList);