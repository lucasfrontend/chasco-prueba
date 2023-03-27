import React from "react";
import './BeerAnimation.css'

const BeerAnimation = () => {

    return <>
        <div className="container">
            <div classNameName="pelu"></div>
            <div className="keg">
                <span className="handle"></span>
                <span className="pipe"></span>
            </div>
            <div className="glass">
                <span className="beer"></span>
            </div>
        </div>
    </>

}

export default BeerAnimation;