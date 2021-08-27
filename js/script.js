function displayTime(){
	var dt = new Date();
	var options = { timeZone: "Europe/Rome", 
				hour12: false,
				weekday: 'short',
				day: 'numeric',
				month: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};

	var dateTime = dt.toLocaleString('it-EU', options);
	let pushDateOutput = document.querySelector(".show-date-time");
	pushDateOutput.textContent = dateTime;
} displayTime();

var timeCount = 0;
var setTimeInt = setInterval(timeCounter, 60000);
function timeCounter(){
	displayTime();
}

	
function fetchData(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=bc4c95b0c76d259e864f39e5eebae189')
		.then(res => res.json())
		.then(data => {
			console.log(data.weather[0].description);
			var weatherStatus = data.weather[0].description;

			if (weatherStatus == 'clear sky'){
				document.getElementById("citystation").style.backgroundImage = "url('img/rome-pixeled.png')";
			} else if(weatherStatus == 'few clouds'){
				document.getElementById("citystation").style.backgroundImage = "url('img/rome-few-clouds.jpg')";
			}else if(weatherStatus == 'scattered clouds'){
				document.getElementById("citystation").style.backgroundImage = "url('img/scattered-cloud-rome.jpg')";
			}
		});
} fetchData();

var count = 0;
var setInt = setInterval(counter, 60000);
function counter(){
	fetchData();
}



	
