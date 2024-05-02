import { useState } from "react";
import React from "react";

function Timer() {
    const timing = new Date().toLocaleTimeString();
    const [time,setTime] = useState(timing)
    function setTimer() {
        const nowtime = new Date().toLocaleTimeString();
        setTime(nowtime);
    }
    setInterval(setTimer, 1000) ;
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={setTimer}>Set Timer</button>
        </div>
    );
}
export default Timer;