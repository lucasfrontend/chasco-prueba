import React, {useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Spinner from "../spinner";

const WeatherPanel = () => {
    const lat = '-35.5404833067820' ;
    const lon = '-58.049692027809016';
    const part = 'hourly,daily'; 
    const keyVieja = `e7ea28eea6e66941216ebf0b7faa1321`;
    const key = 'fbf06dde7bf4c0ad9452651d32bb4f1a'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
   // const nada = `https://api.openweathermap.org/data/2.5/forecast?lat=-35.5404833067820&lon=$-58.049692027809016&appid=fbf06dde7bf4c0ad9452651d32bb4f1a`;
//    const [ city, setCity] =  useState('');

    const [weather, setWeather ] = useState([]);
    const [forecast, setForecast ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (loading) {
            async function fetchData() {
              try {
                const response = await fetch(url);
                if (response.ok) {
                  const dog = await response.json();
                  setWeather(dog);
                  setLoading(false);
                } else {
                  console.log("Hubo un error");
                  setLoading(true)
                }
              } catch (error) {
                console.log("No pudimos hacer la solicitud para obtener datos");
                setLoading(true)
                setShow(false);
              }
            }
            fetchData();
          }
      }, [loading]);

      useEffect(() => {
        if (loading) {
            async function fetchData() {
              try {
                const response = await fetch(urlForecast);
                if (response.ok) {
                  const dog = await response.json();
                  setForecast(dog);
                  setLoading(false);
                } else {
                  console.log("Hubo un error");
                  setLoading(true)
                }
              } catch (error) {
                console.log("No pudimos hacer la solicitud para obtener datos");
                setLoading(true)
                setShow(false);
              }
            }
            fetchData();
          }
      }, [loading]);

      /*
    useEffect(()=> {
        setLoading(true);
        fetch(urlForecast)
            .then((res) => res.json())
            .then((dataF) => {
                //const weather = data.json()
                console.log(dataF, "data");
                const weatherDataF = {
                    
                }
                setForecast(dataF)
            })
    }, [])
    */

    if(loading === true){
        return <>
        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
        <Spinner />

        </div>
        </>
    } else {
        console.log("clima hoy", weather)
        console.log("datos clima maniana", forecast)
        return <>
        <div class="bg-weather">
          <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            <WeatherCard 
                  show={show}
                  loading={loading}
                  weather={weather}
                  forecast={forecast}
                />
            {/* card 2 */}
              <div class="flex flex-wrap">
                <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
                <div class="flex-grow flex flex-col backdrop-blur border-t border-b sm:rounded sm:border shadow overflow-hidden">
                <div class="border-b">
                <div class="flex justify-between px-6 -mb-px">
                  <h3 class="text-blue-dark py-4 font-normal text-lg">lorem</h3>
                  <div class="flex">
                    <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                    lorem
                                        </button>
                    <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                    lorem
                                        </button>
                  </div>
                </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-orange inline-flex mr-3">
                    <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z"></path></g></svg>
                  </div>
                  <span class="text-lg">lorem</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-orange h-2 rounded-full flex-grow mr-2"></div>
                  100%
                </div>
                <div class="flex w-3/5 md:w/12">
                  <div class="w-1/2 px-4">
                    <div class="text-right">
                      0.lorem BTC
                    </div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      Clorem.28
                    </div>
                  </div>
                </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-grey inline-flex mr-3">
                    <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g fill-rule="evenodd"><path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path></g></svg>
                  </div>
                  <span class="text-lg">ll</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                  0%
                </div>
                <div class="flex w-3/5 md:w/12">
                  <div class="w-1/2 px-4">
                    <div class="text-right">
                      0.0000 
                    </div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      CA$0.00
                    </div>
                  </div>
                </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-indigo inline-flex mr-3">
                    <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z"></path></g></svg>
                  </div>
                  <span class="text-lg">ggg</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-indigo h-2 w-2 rounded-full mr-2"></div>
                  0%
                </div>
                <div class="flex w-3/5 md:w/12">
                  <div class="w-1/2 px-4">
                    <div class="text-right">
                      0.0000
                    </div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      0.00
                    </div>
                  </div>
                </div>
                </div>
                <div class="px-6 py-4">
                <div class="text-center text-grey">
                  Total &asymp; C1.28
                </div>
                </div>
                </div>
                </div>
                
                <div class="w-full lg:w-1/2 px-4">

                <div class="backdrop-blur border-t border-b sm:rounded sm:border shadow">
                <div class="border-b">
                <div class="flex justify-between px-6 -mb-px">
                  <h3 class="text-blue-dark py-4 font-normal text-lg">Prono prox</h3>
                </div>
                </div>
                <div>
                <div class="text-center px-6 py-4">
                  <div class="py-8">
                    <div class="mb-4">
                      <svg class="inline-block fill-current text-grey h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"/></svg>
                    </div>
                    <p class="text-2xl text-grey-darker font-medium mb-4">descrip</p>
                    <p class="text-grey max-w-xs mx-auto mb-6">data api</p>
                    <div>
                      <button type="button" class="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4">bla</button>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>

    }

}

export default WeatherPanel;