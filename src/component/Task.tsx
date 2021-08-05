import { useState } from "react";
import React from "react";

import DonenDeleButt from "./DonenDeleButt"

type taskData = {
    id: number;
    callsign: string,
    doneFunc: Function,
    deleFunc: Function
}

const Task = ({id, callsign, doneFunc, deleFunc} : taskData) => {
    const [showButt, setShowButt] = React.useState(false);
    const mouseEnter = () => setShowButt(true);
    const mouseLeave = () => setShowButt(false);
    

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <span className="text-2xl"> {callsign} </span>
            {showButt ? <DonenDeleButt id={id} doneFunc={doneFunc} deleFunc={deleFunc} /> : null}
        </div>
    )
}

export default Task