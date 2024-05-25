const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02b3d78de9msh1527d13d23d58fdp15437bjsn40083e373cc4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = ()=>{
	//cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
		dcloud_pct.innerHTML = 20
		dtemp.innerHTML = response.temp
		//temp2.innerHTML = response.temp
		//dfeels_like.innerHTML = response.feels_like
		dhumidity.innerHTML = response.humidity
		//humidity2.innerHTML = response.humidity
		dmin_temp.innerHTML = response.min_temp
		dmax_temp.innerHTML = response.max_temp
		dwind_speed.innerHTML = response.wind_speed
		//wind_speed2.innerHTML = response.wind_speed
		//wind_degrees.innerHTML = response.wind_degrees
		//sunrise.innerHTML = response.sunrise
		//sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", function(){
    getWeather();
  });

  getWeather()