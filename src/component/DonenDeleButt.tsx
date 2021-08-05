import React from "react";

type impor = {
    id: number,
    doneFunc: Function,
    deleFunc: Function
}

const DonenDeleButt = ({ id, doneFunc, deleFunc }: impor) => {
    return (
        <div className="flex space-x-1 items-center">
            <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFunc(id)} >Done</button>
            <button className="bg-red-400 w-24 text-2xl" onClick={() => deleFunc(id)}>Delete</button>
        </div>
    )
}

export default DonenDeleButt;