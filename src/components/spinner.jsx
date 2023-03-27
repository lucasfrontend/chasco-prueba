import React from "react";
import './spinner.css'


const Spinner = () => {

    return <>
        <section className="altimeters">
            <container className="altimeter2">
                <div className="altimeter" >
                    <input type="hidden" name="clockMinutes" id="clockMinutes" value="21" />
                    <article className="clock">
                        <div className="minutes-container">
                                <div className="minutes"></div>
                            </div> 
                        <div className="seconds-container-bobo">
                            <div className="seconds"></div>
                        </div>
                        <div className="seconds-container">
                            <div className="seconds"></div>
                        </div>
                    </article>
                </div>
            </container>
        </section>
    </>

}

export default Spinner;