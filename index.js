let weather = document.getElementById("weather");
let weatherWeek = document.getElementById("weatherWeek");
let modal = document.getElementById("modal");


let key = `f27f657ceeac10c4def5151bb67622d3`


let base_url = `https://api.openweathermap.org/`

let end_point  = `data/2.5/weather?q=London&appid=`

let api_url = base_url+end_point+key

let week_endpoint = `data/2.5/forecast`

let week_url = base_url+week_endpoint+`?q=London&appid=`+key
// let week_endpoint = ``

// let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f27f657ceeac10c4def5151bb67622d3`
// let forcast = `https://pro.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=f27f657ceeac10c4def5151bb67622d3`
getWeather(api_url)
getWeatherWeek(week_url)
function getWeather(api_url){
    fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        showWeather(data)
    })
}


function getWeatherWeek(week_url){
    fetch(week_url)
    .then((res) => res.json())
    .then((data) => {
    
        ShowweatherWeek(data.list)
    })
}

function showWeather(data){
    // document.getElementById("weather")
    weather.innerHTML +=`
               <div class="row ">
                    <div class="col-6">
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
                        <br/><span>${data.weather[0].main}</span>
                    </div>
                    <div class="col-6">
                        <b>${data.name}</b>
                        <br>
                        <small>${data.weather[0].description}</small>
                    </div>
                       <div class="col-4">
                  <i class="bi bi-thermometer"></i>
                    <small>${(data.main.temp-273.15).toFixed(2)}</small>
                </div>
                 <div class="col-4">
                <i class="bi bi-wind"></i>
                    <small>${data.wind.speed} m/s</small>
                </div>
                           <div class="col-4">
                <i class="bi bi-moisture"></i>
                    <small>${data.main.humidity}</small>
                </div>
                </div>
    `
}


function ShowweatherWeek(data){
    // document.getElementById("weather")
    weatherWeek.innerHTML =" "

    data.map((data) => {
  weatherWeek.innerHTML +=`
               <div class="row border p-4 shadow ">
                    <div class="col-6 ">
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
                        <br/><span>${data.weather[0].main}</span>
                    </div>
                    <div class="col-6">
                        <b>${data.dt_txt}</b>
                        <br>
                        <small>${data.weather[0].description}</small>
                    </div>
                       <div class="col-4">
                  <i class="bi bi-thermometer"></i>
                    <small>${(data.main.temp-273.15).toFixed(2)}</small>
                </div>
                 <div class="col-4">
                <i class="bi bi-wind"></i>
                    <small>${data.wind.speed} m/s</small>
                </div>
                           <div class="col-4">
                <i class="bi bi-moisture"></i>
                    <small>${data.main.humidity}</small>
                </div>
                </div>
    `

    })
  
}



function showMore(){

    modal.innerHTML += `
            <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    `
}