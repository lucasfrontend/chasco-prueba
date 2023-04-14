import React, { useState, useEffect } from "react";
import moment from 'moment';
import "./footer.css"

const Footer = ({ weather }) => {
    
    let sunset = weather.sys.sunset;
    let timeSunset = moment.unix(sunset).format('h:mm A');

    const [timeRemaining, setTimeRemaining] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = moment();
            const sunsetMoment = moment.unix(sunset);
            const diffHours = sunsetMoment.diff(now, 'hours'); // Diferencia en horas
            if (diffHours <= 1 && now.isBefore(sunsetMoment)) { // Si la diferencia es menor o igual a 2 horas y no ha pasado el atardecer
                const duration = moment.duration(sunsetMoment.diff(now));
                setTimeRemaining(duration.hours().toString().padStart(2, '0') + ":" + duration.minutes().toString().padStart(2, '0') + ":" + duration.seconds().toString().padStart(2, '0'));
            } else {
                setTimeRemaining(null);
                clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [sunset]);

    return (
        <>
            <div className="flex justify-between">
                {timeRemaining ? (
                    <div className="flex items-center pt-2 pb-2 font-semibold">
                        <span className="text-white pr-2 text-2xl">Se va el sol en </span>
                        <span className="text-red-chasco text-2xl">{timeRemaining}!</span>
                    </div>
                ) : (
                    <div className="flex items-center pt-2 pb-2 font-semibold">
                        <span className="text-white pr-2 text-2xl">Se va el sol </span>
                        <span className="text-white text-2xl">{timeSunset}!</span>
                    </div>
                )}
                <h4 className="flex-1 text-right text-white">Make with <span className="text-red-chasco text-2xl">♥</span> by <a href="" className="text-bl-chasco">BarriDev</a></h4>
            </div>
        </>
    );
};

export default Footer;
