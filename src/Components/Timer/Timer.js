import React from 'react'
import "../Timer/Timer.scss"

export default function Timer() {
    function formatTime(time) {
        let seconds = time % 60;
        return `${seconds}`;
    }
    const TIME_LIMIT = 61;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;


    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            if (timeLeft < 1) {
                timePassed = 0;
            }
            document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        }, 1000);
    }


    return (
        <div onLoad={startTimer()}>
            <div className="base-timer">
                <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className="base-timer__circle">
                        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                        <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            class="base-timer__path-remaining ${remainingPathColor}"
                            d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                            "
                        ></path>
                    </g>
                </svg>
                <span id="base-timer-label" class="base-timer__label">

                </span>
            </div>
        </div>
    )
}
