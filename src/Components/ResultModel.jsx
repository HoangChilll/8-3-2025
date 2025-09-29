import { useRef } from "react";
import { useImperativeHandle } from "react"

export default function ResultModel({remainningTime,onReset,targetTime,ref}){
    const dialogInside=useRef();
    const useLost=remainningTime<=0;
    const formatedRemainingTime=(remainningTime / 1000).toFixed(2);
    const score=Math.round((1-remainningTime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialogInside.current.showModal();
            },
        };
    });
    return(
        <dialog ref={dialogInside} className="result-modal">
             {useLost&&<h2>You Lose</h2>}
            {!useLost&&<h2>Your Score {score}</h2>}
            <p>
                TargetTime: <strong>{targetTime} second</strong>
            </p>
            <p>
                bạn stop tại <strong>{formatedRemainingTime} second</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}