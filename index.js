let weather = document.getElementById("weather");

let key = `f27f657ceeac10c4def5151bb67622d3`


let base_url = `https://api.openweathermap.org/`

let end_point  = `data/2.5/weather?q=London&appid=`

let api_url = base_url+end_point+key

// let week_endpoint = ``

// let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f27f657ceeac10c4def5151bb67622d3`

getWeather(api_url)

function getWeather(api_url){
    fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        showWeather(data)
    })
}


function showWeather(data){
    // document.getElementById("weather")
    weather.innerHTML +=`
               <div class="row">
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