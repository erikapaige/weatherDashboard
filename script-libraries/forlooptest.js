//below gives the current time and date
const currentTime = (moment().format('MM [/] DD [/] YYYY'))
let lat = ''
let long = ''

//function that makes the search button retreive weather from the searched city
document.getElementById('searchWeather').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('name').value)
  let input = document.getElementById('name').value

  // calling on the function that returns the value of the input
  searchCity(input)

  // first day in five day forecast
  function firstForecast() {
    //fetching API for five day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayOne => {
        console.log(dayOne)

        // creating a new div to show first day
        let dayOneElem = document.createElement('div')
        //adding class of card to new element
        dayOneElem.className = 'card'
        //adding styling attributes to new element
        dayOneElem.style= 'width: 6rem;'
        //formatting HTML of new element, index goes up by to call new day
        dayOneElem.innerHTML= `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayOne.list[0].weather[0].icon}.png></h6>
          <p>${dayOne.list[0].main.temp}°F </p>
          <p>${dayOne.list[0].main.humidity}%</p>
        `
        //merging the newly created element to the ID on HTML
        document.getElementById('dayOne').append(dayOneElem)
      })
      .catch(e => { console.log(e) })
  }
  //returning the first day in 5 day weather forecast to the new div
  firstForecast()

  // second day in five day forecast
  function secondForecast() {
    //fetching API for five day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayTwo => {
        console.log(dayTwo)

        // creating new div to show second day
        let dayTwoElem = document.createElement('div')
        //adding class of card to new element
        dayTwoElem.className = 'card'
        //adding styling attributes to new element
        dayTwoElem.style = 'width: 6rem;'
        //formatting HTML of new element, index goes up by to call new day
        dayTwoElem.innerHTML = `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayTwo.list[1].weather[0].icon}.png></h6>
          <p>${dayTwo.list[1].main.temp}°F </p>
          <p>${dayTwo.list[1].main.humidity}% </p>
        `
        //merging the newly created element to the ID on HTML
        document.getElementById('dayTwo').append(dayTwoElem)
      })
      .catch(e => { console.log(e) })
  }
  //returning the second day in 5 day weather forecast to the new div
  secondForecast()

  // third day in five day forecast
  function thirdForecast() {
    //fetching API for five day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayThree => {
        console.log(dayThree)

        // creating new div to show third day
        let dayThreeElem = document.createElement('div')
        //adding class of card to new element
        dayThreeElem.className = 'card'
        //adding styling attributes to new element
        dayThreeElem.style = 'width: 6rem;'
        //formatting HTML of new element, index goes up by to call new day
        dayThreeElem.innerHTML = `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayThree.list[2].weather[0].icon}.png></h6>
          <p>${dayThree.list[2].main.temp}°F </p>
          <p>${dayThree.list[2].main.humidity}% </p>
        `
        //merging the newly created element to the ID on HTML
        document.getElementById('dayThree').append(dayThreeElem)
      })
      .catch(e => { console.log(e) })
  }
  //returning the thrid day in 5 day weather forecast to the new div
  thirdForecast()

  // fourth day in five day forecast
  function fourthForecast() {
    //fetching API for five day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayFour => {
        console.log(dayFour)

        // creating new div to show fourth day
        let dayFourElem = document.createElement('div')
        //adding class of card to new element
        dayFourElem.className = 'card'
        //adding styling attributes to new element
        dayFourElem.style = 'width: 6rem;'
        //formatting HTML of new element, index goes up by to call new day
        dayFourElem.innerHTML = `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayFour.list[3].weather[0].icon}.png></h6>
          <p>${dayFour.list[3].main.temp}°F </p>
          <p>${dayFour.list[3].main.humidity}% </p>
        `
        //merging the newly created element to the ID on HTML
        document.getElementById('dayFour').append(dayFourElem)
      })
      .catch(e => { console.log(e) })
  }
  //returning the fourth day in 5 day weather forecast to the new div
  fourthForecast()

  // fifth day in five day forecast
  function fifthForecast() {
    //fetching API for five day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=89c540c6e55003d691ce0c7d883474f3`)
      .then(r => r.json())
      .then(dayFive => {
        console.log(dayFive)

        // creating new div to show fifth day
        let dayFiveElem = document.createElement('div')
        //adding class of card to new element
        dayFiveElem.className = 'card'
        //adding styling attributes to new element
        dayFiveElem.style = 'width: 6rem;'
        //formatting HTML of new element, index goes up by to call new day
        dayFiveElem.innerHTML = `
          <h6 class="card-subtitle mb-2 text-muted"><img src=http://openweathermap.org/img/w/${dayFive.list[4].weather[0].icon}.png></h6>
          <p>${dayFive.list[4].main.temp}°F </p>
          <p>${dayFive.list[4].main.humidity}% </p>
        `
        //merging the newly created element to the ID on HTML
        document.getElementById('dayFive').append(dayFiveElem)
      })
      .catch(e => { console.log(e) })
  }
  //returning the fifth day in 5 day weather forecast to the new div
  fifthForecast()

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


