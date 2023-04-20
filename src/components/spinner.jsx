import React from "react";
import moment from 'moment';
import './spinner.css'


const Spinner = ({ }) => {


    const showText = false

    return <>
        <section className="altimeters">
        {showText && <h1 className="text-bl-chasco sol">SE VA EL SOL EN</h1>}
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