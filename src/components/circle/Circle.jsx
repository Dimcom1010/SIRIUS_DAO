import React from "react";
import './Circle.css';
import arrow from './arrow.svg';


const Circle = (props) => {

    return (
        <>
            <div className="circle">
                <img src={arrow} className="arrow arrow_up" alt="arrow" />
                <img src={arrow} className="arrow arrow_down" alt="arrow" />
            </div>

        </>
    )
}

export default Circle