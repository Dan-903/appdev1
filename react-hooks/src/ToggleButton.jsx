import { useState } from "react";

const ToggleButton = () => {
    const [toggle, setToggle] = useState(false);


    return(
        <>
        <div>
            <h1>The Button is {toggle ? "On": "Off"}</h1>
            <button onClick={() => {setToggle(!toggle)}}>{toggle ? "On": "Off"}</button>

        </div>
        </>
    )
}

export default ToggleButton