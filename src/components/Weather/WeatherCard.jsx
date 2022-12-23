import React from "react";
import SmallSpinner from "../dumbComponents/SmallSpinner";
import './weather.css'

const WeatherCard = ({show, loading, weather, forecast}) => {

    let today = new Date()
    let day = today.getDate();
    let mounth = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + mounth + '/' + year;

    let sunrise = weather.sys.sunrise;
    let datoSunrise = new Date(sunrise * 1000);
    let timeSunrise = datoSunrise.toLocaleTimeString();

    let sunset = weather.sys.sunset;
    let datoSunset = new Date(sunset * 1000);
    let timeSunset = datoSunset.toLocaleTimeString();
    
    let url = '';
    let iconUrl = '';
    let iconUrl3 = '';
    let iconUrl6 = '';
    let iconUrl9 = '';

    let forecastDate1 = '';
    let forecastDate2 = '';
    let forecastDate3 = '';

    console.log('datos clima maniana', forecast.list)

    if(show){
        url = 'https://api.openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + ".png"


//        exigirme cosas estando con licencia medica , mensajes de los chicos diciendome q victor estaba enojado 
//        porq la licencia fue muy localStorage, castigarme por haberme fracturado



        //iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        //forecastDate1 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        //console.log(forecastDate1, "forecastDate1")
        console.log("iconUrl3", iconUrl3)
    }

    return <>
    <div className="">
          <div class=" border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 backdrop-blur">
              <div class="border-b px-6">
                  <div class="flex justify-between -mb-px">
                    <div class="text-3xl py-4 text-lg">
                        {weather.name}
                    </div>
                    {/*
                        <div class="hidden lg:flex">
                            <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
                                Bitcoin &middot;
                            </button>
                            <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6">
                                Ethereum &middot; CA$884.80
                            </button>
                            <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                Litecoin &middot; CA$358.24
                            </button>
                        </div>
                    
                    */}
                    <div class="flex text-sm">
                        <div className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                            <div class="nrc-weather icon-sunrise"> </div>
                        </div>
                        <div class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3 text-2xl">
                        {timeSunrise} AM
                        </div>
                        <div class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                            <div class="nrc-weather icon-sunset"></div>
                        </div>
                        <div class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3 text-2xl">
                        {timeSunset} PM
                        </div>
                    </div>
                </div>
          </div>
            
            <div class=" lg:flex">
                <div class="w-1/3 text-center py-8">
                    <div class="border-r">
                        <div class="text-grey-darker mb-2">
                            <div class="w-7 tracking-wide">
                                <img src="https://res.cloudinary.com/abdelaziz18003/image/upload/v1443203550/showLocalWeather/max-temp.png" alt="temperature icon" title="Click to switch between °C and °F"/>
                            </div>
                            <p class="text-5xl align-top ">Temp{(weather.main.temp - 273.15).toFixed(1)}</p>
                            <p class="text-2xl">Min {(weather.main.temp_min - 273.15).toFixed(1)} C</p>
                            <p class="text-2xl align-top">Max {(weather.main.temp_max - 273.15).toFixed(1)} C</p>
                            <p class="text-2xl">Térm {(weather.main.feels_like - 273.15).toFixed(1)} C</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/3 text-center py-8">
                    <div class="border-r">
                    <div class="text-grey-darker mb-2">
                        <div class="w-10 tracking-wide">
                            <img src="https://res.cloudinary.com/abdelaziz18003/image/upload/v1443351278/showLocalWeather/wind.png" alt="temperature icon" title="Click to switch between °C and °F"/>
                        </div>
                        <p class="text-5xl align-top"><p class="text-green align-top text-3xl">Velocidad</p>Speed {weather.wind.speed} m/s</p>
                        <p class="text-2xl">N {weather.wind.speed * 1944 / 1} m/s</p>
                        <p class="text-2xl">GUST {weather.wind.gust}</p>
                        <p class="text-2xl align-top">DEG {weather.wind.deg}</p>
                    </div>
                    </div>
                </div>
                <div class="w-1/3 text-center py-8">
                    <div>
                    <div class="text-grey-darker mb-2">
                        <span class="text-3xl align-top"><span class="text-green align-top">description</span>{weather.weather[0].description}</span>
                        <span class="text-3xl align-top">{weather.weather[0].main}</span>
                        <span><img src={iconUrl} alt="icon" />{weather.weather[0].description}</span>
                    </div>
                    <div class="text-sm uppercase text-grey tracking-wide">
                        titulo (%)
                    </div>
                    </div>
                </div>
            </div>
          </div>

    </div>


{/* datos borrar*/}

        <div>
            <h2 className="text-black">.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-sceen p-1">
                {/* <h1 className="text-black">Temperatura {(weather.main.temp - 273.15).toFixed(1)} corculito C</h1>
                <h1 className="text-black">Chasci{weather.name}</h1>
                <h1 className="text-black">Sunrise {timeSunrise}</h1>
                <h1 className="text-black">Sunset {timeSunset}</h1>

                <h1 className="text-black">Temperatura {(weather.main.temp - 273.15).toFixed(1)}C</h1>
                <h1 className="text-black">Min {(weather.main.temp_min - 273.15).toFixed(1)} C</h1>
                <h1 className="text-black">Max {(weather.main.temp_max - 273.15).toFixed(1)} C</h1>
                <h1 className="text-black">Térmica {weather.main.feels_like} C</h1>
                
                
                <h1 className="text-black">DEG{weather.wind.deg}</h1>
                <h1 className="text-black">GUST{weather.wind.gust}</h1>
                <h1 className="text-black">Speed SM{weather.wind.speed} m/s</h1>
                <h1 className="text-black">Nudos{weather.wind.speed * 1944 / 1} m/s</h1>

                <h1 className="text-black">Nudos{weather.wind.speed* 1944 / 1} m/s</h1>
                <h1 className="text-black">timezone{weather.timezone}</h1>
                <p><img src={iconUrl} alt="icon" />{weather.weather[0].description}CULLOOO</p>
                <h1 className="text-black">description{weather.weather[0].description}</h1>
                <h1 className="text-black">Main{weather.weather[0].main}</h1>


                <h1 className="text-black">visibility{weather.visibility}</h1>
                <h1 className="text-black">{}</h1>
                <h1 className="text-black">{}</h1>
                <h1 className="text-black">{}</h1>
                */}
                
                
                {/* para forest
                <h1 className="text-black">Name {date}</h1>
                <h1 className="text-black">Ciudad{weather.city.name}</h1>
                <h1 className="text-black">Sunrise{weather.city.sunrise}</h1>
                <h1 className="text-black">Sunset{weather.city.sunset}</h1>
                
                */}

            </div>

        </div>
    </>

}

export default WeatherCard;