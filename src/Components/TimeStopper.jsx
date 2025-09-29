import { useRef, useState } from "react"
import ResultModel from "./ResultModel";

export default function TimeStopper({title, targettime}){
    const timer=useRef();
    const dialog =useRef();
    const [timeRemainning,setTimeRemainning]=useState(targettime*1000);
    const timeStart=timeRemainning>0&&timeRemainning<targettime*1000;
    if(timeRemainning<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleClick(){
        timer.current=setInterval(()=>{

            setTimeRemainning((prev)=>prev-10);
        },10);
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemainning(targettime*1000);
    }
    return (
        <>
        <ResultModel ref={dialog} targetTime={targettime} result={"lost"} remainningTime={timeRemainning} onReset={handleReset}></ResultModel>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targettime} second{targettime>1?"s":""}
            </p>
            <button onClick={timeStart?handleStop:handleClick}>{timeStart ?"Stop":"Start"}</button>
            <p className={timeStart?"active":undefined}>{timeStart?"time is running":"time inactive"}</p>
        </section>
        </>
        )
}