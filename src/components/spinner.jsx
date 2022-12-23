import React from "react";
import './spinner.css'


const Spinner = () => {

    return <>
        <section class="altimeters">
            <container class="altimeter2">
                <div class="altimeter" >
                    <input type="hidden" name="clockMinutes" id="clockMinutes" value="21" />
                    <article class="clock">
                        <div class="minutes-container">
                                <div class="minutes"></div>
                            </div> 
                        <div class="seconds-container-bobo">
                            <div class="seconds"></div>
                        </div>
                        <div class="seconds-container">
                            <div class="seconds"></div>
                        </div>
                    </article>
                </div>
            </container>
        </section>
    </>

}

export default Spinner;