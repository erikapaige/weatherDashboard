//below gives the current time and date
const currentTime = (moment().format('MM [/] DD [/] YYYY'))
let lat = ''
let long = ''
let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"]

//function that makes the search button retreive weather from the searched city
document.getElementById('searchWeather').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('name').value)
  let input = document.getElementById('name').value

  // calling on the function that returns the value of the input
  searchCity(input)

  // first day in five day forecast
  function firstForecast() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayOne => {
        console.log(dayOne)

        // creating the div to show first day
        let dayOneElem = document.createElement('div')
        dayOneElem.className = 'card'
        dayOneElem.style= 'width: 6rem;'
        dayOneElem.innerHTML= `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayOne.list[0].weather[0].icon}.png></h6>
          <p>${dayOne.list[0].main.temp}°F </p>
          <p>${dayOne.list[0].main.humidity}%</p>
        `
        //return value of first day in 5 day weather forecast
        document.getElementById('dayOne').append(dayOneElem)
      })
      .catch(e => { console.log(e) })
  }
  firstForecast()

  // second day in five day forecast
  function secondForecast() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayTwo => {
        console.log(dayTwo)

        // creating the div to show first day
        let dayTwoElem = document.createElement('div')
        dayTwoElem.className = 'card'
        dayTwoElem.style = 'width: 6rem;'
        dayTwoElem.innerHTML = `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayTwo.list[0].weather[0].icon}.png></h6>
          <p>${dayTwo.list[1].main.temp}°F </p>
          <p>${dayTwo.list[1].main.humidity}% </p>
        `
        //return value of first day in 5 day weather forecast
        document.getElementById('dayTwo').append(dayTwoElem)
      })
      .catch(e => { console.log(e) })
  }
  secondForecast()

})


function searchCity(city) {
  //fetching the weather information from the
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=89c540c6e55003d691ce0c7d883474f3`)
    .then(r => r.json())
    .then(currentWeather => {
      //keep console.log to go back and see offered weather conditions
      console.log(currentWeather)

      //fetching the coordinates that created the UV index
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
}

//5 day forecast


