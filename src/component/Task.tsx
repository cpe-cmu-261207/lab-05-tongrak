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

    // const [showDele, setShowDele] = React.useState(false);
    

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <span className="text-2xl"> {callsign} </span>
            {/* <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl"  onClick={() => doneFunc(id) } onMouseEnter={mouseEnter} onMouseLeave={() => {}}>Done</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() => deleFunc(id)} onMouseEnter={() => {}} onMouseLeave={() => {}}>Delete</button>
            </div> */}
            {showButt ? <DonenDeleButt id={id} doneFunc={doneFunc} deleFunc={deleFunc} /> : null}
            {/* <DonenDeleButt id={id} doneFunc={doneFunc} deleFunc={deleFunc} /> */}
        </div>
    )
}

const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  
  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )

export default Task