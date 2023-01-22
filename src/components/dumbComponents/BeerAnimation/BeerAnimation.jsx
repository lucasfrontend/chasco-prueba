import React from "react";
import './BeerAnimation.css'

const BeerAnimation = () => {

    return <>
        <div class="container">
            <div className="pelu"></div>
            <div class="keg">
                <span class="handle"></span>
                <span class="pipe"></span>
            </div>
            <div class="glass">
                <span class="beer"></span>
            </div>
        </div>
    {/*
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
    */}


    </>

}

export default BeerAnimation;