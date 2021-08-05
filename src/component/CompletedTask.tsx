import React from "react";

type taskData = {
    callsign: string,
}

const CompletedTask = ({callsign} : taskData) => {
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl line-through"> {callsign} </span>
        </div>
    )
}

export default CompletedTask