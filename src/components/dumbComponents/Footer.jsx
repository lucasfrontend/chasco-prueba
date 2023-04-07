import React from "react";

const Footer = ({ show, weather, forecast }) => {

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


    console.log('datos clima maniana', forecast.list)

 

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

<div class="flex justify-between">
<div class="flex items-center">
    <span class="flex-1 text-white">Se va el sol:</span>
    <span class="flex-1 text-white">{timeSunset} PM</span>
</div>
    <div class="flex-1 text-white"><div class="nrc-weather icon-sunset"></div></div>

    <h4 class="flex-1 text-right">Make with <span class="text-red text-2xl">♥</span> by <a href="" class="text-blue">BarriDev</a></h4>
</div>



    </>

}

export default Footer;