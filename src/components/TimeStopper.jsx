import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimeStopper({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    
    if(timeRemaining <= 0 ){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleStart(){
        timer.current = setInterval(() =>{
            setTimeRemaining((prevRemaining) => prevRemaining - 10);
        }, 10);
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} result={timeRemaining <= 0 ? "lose" : "win"} remaining={timeRemaining} onRest={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <button onClick={timeIsActive ? handleStop : handleStart}>{timeIsActive ? "Stop" : "Start"}</button>
                <p className={timeIsActive ? "active" : undefined}>{timeIsActive ? "Time is running" : "Timer inactive"}</p>
            </section>
        </>
    )
}