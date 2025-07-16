import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function ResultModel({result, targetTime, ref, remaining, onRest}){
    const dialog = useRef();
    const timeRemaining = remaining / 1000;
    const score = Math.round((1 - remaining / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <h3>Điểm của bạn: {remaining <= 0 ? "0" : score}</h3>
            <p>
                Thời gian đích: <strong>{targetTime} second</strong>
            </p>
            <p>
                Thời gian còn: <strong>{timeRemaining} second</strong>
            </p>
            <form method="dialog" onSubmit={onRest}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal"),
    )
}