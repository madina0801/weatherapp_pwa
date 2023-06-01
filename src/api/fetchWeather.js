import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4656d147fd60979d82696e05f9f45ba7'

const fetchWeather = async(query) => {
	const response = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY,
		}
	})
}