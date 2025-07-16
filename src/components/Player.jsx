import { useState, useRef } from "react";


export default function Player(){
    const player = useRef();
    const [playerName, setPlayerName] = useState(null);
    // const [submit, setSubmit] = useState(false);
    // function handleChange(event){
    //     setSubmit(false);
    //     setPlayerName(event.target.value);
    // }

    function handelClick(){
        // if (playerName !== ""){
        //     setSubmit(true);
        // }
        setPlayerName(player.current.value);
    }
    return (
        <section id="player">
            <h2>Welcome {playerName ?? "No Name"}</h2>
            <div>
                <input type="text" ref={player}/>
                <button onClick={handelClick}>Set Name</button>
            </div>
        </section>
    )
}