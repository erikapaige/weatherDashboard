//below gives the current time and date
const currentTime = (moment().format('MM [/] DD [/] YYYY'))
let lat = ''
let long = ''

//function that makes the search button retreive weather from the searched city
document.getElementById('searchWeather').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('name').value)


  //fetching the weather information from the input
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('name').value}&units=imperial&APPID=89c540c6e55003d691ce0c7d883474f3`)
    .then(r => r.json())
    .then(currentWeather => {
      //keep console.log to go back and see offered weather conditions
      console.log(currentWeather)

      lat = currentWeather.coord.lat
      long = currentWeather.coord.lon
      fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=89c540c6e55003d691ce0c7d883474f3&lat=${lat}&lon=${long}`)
        .then(r => r.json())
        .then(UVdata => {
          console.log(UVdata)
          let color;
          if (UVdata.value < 3) {
            color = "success"
          } else if (UVdata.value < 7) {
            color = "warning"
          } else {
            color = "danger"
          }

          //creating new element that includes searched city
          let currentWeatherElem = document.createElement('div')
          currentWeatherElem.className = 'card'
          currentWeatherElem.style = 'width: 18 rem;'
          currentWeatherElem.innerHTML = `
          <h5 class="card-header">
          ${currentWeather.name} (${currentTime}) <span><img src=http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png></span>
          </h5>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Current Temperature: ${currentWeather.main.temp}°F </li>
              <li class="list-group-item">Humidity: ${currentWeather.main.humidity}%</li>
              <li class="list-group-item">Wind Speed: ${currentWeather.wind.speed} MPH</li>
              <li class="list-group-item">UV Index:<a href="#" class="btn btn-${color}">${UVdata.value} </a></li>
            </ul>
          </div>
          `
          //clears the previous search and text input 
          document.getElementById('currentWeather').innerHTML = ``

          //returns the value of the searched city
          document.getElementById('currentWeather').append(currentWeatherElem)
        }) 
    })
  })



