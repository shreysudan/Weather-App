import axios from 'axios';

const API_KEY = '28762df1b6e441c588e1ff0cf311940e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}