import "../BestPrice/BestPrice.scss"

import React from 'react';
import poster1 from "../../Images/p1.png"

export default function BestPrice() {
    return (
        <div className="price-div">
            <p className="price-heading">Best Price to Trade</p>
            <div className="best-wrap">
                <div className="value-block">
                    <p className="best-value">0.43 %</p>
                    <p className="time-value">5 Mins</p>
                </div>
                <div className="value-block">
                    <p className="best-value">1.58 %</p>
                    <p className="time-value">1 Hour</p>
                </div>
                <div className="price-block">
                    <p className="price-value">₹ 78.000</p>
                    <p className="price-info">Average USDT/INR net price including commission</p>
                </div>
                <div className="value-block">
                    <p className="best-value">5.77 %</p>
                    <p className="time-value">1 Day</p>
                </div>
                <div className="value-block">
                    <p className="best-value">15.3 %</p>
                    <p className="time-value">7 days</p>
                </div>
            </div>
            <div className="ad-wrap" >
                <img src={poster1} className="ad-poster1"></img>
            </div>
        </div>
    )
}
