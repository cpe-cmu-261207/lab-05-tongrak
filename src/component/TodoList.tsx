import React from "react";

import Task from "./Task";
import CompletedTask from "./CompletedTask";

import { useState } from "react";

type taskData = {
    id: number,
    name: string
}


const TodoList = () => {
    // Variables sec
    const [tempStr, setTempStr] = useState<string>('');
    const [currTaskList, setCurrTaskList] = useState<taskData[]>([]);
    const [completedTaskList, setCTL] = useState<string[]>([]);

    // Functions sec
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key == 'Enter') addTask(tempStr);
    }
    const txtInputCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setTempStr(ev.target.value)
    }

    const addTask = (inStr: string) => {
        if (inStr.length == 0) {
            alert("Can't add empty tasks")
        } else {
            console.log("Task added: " + inStr);
            const newId = (new Date()).getTime();
            // const newTasksList = [...currTaskList, { id: newId, name: tempStr }]

            setCurrTaskList([...currTaskList, { id: newId, name: tempStr }])
        }
    }

    const doneFunction = (inInt: number) => {

        console.log(currTaskList.filter(x => x.id === inInt).map(x => {return x.name}) + " : Marked as done");
        //update Completed tasks list
        setCTL(completedTaskList.concat(currTaskList.filter(x => x.id === inInt).map(x => {return x.name})));

        setCurrTaskList(currTaskList.filter(x => x.id !== inInt))
    }

    const deleFunction = (inInt: number) => {

        console.log(currTaskList.filter(x => x.id === inInt).map(x => {return x.name}) + " : Selected to be delete");
        // const newTasksList = tasks.filter(x => x.id !== id)
        setCurrTaskList(currTaskList.filter(x => x.id !== inInt))
    }



    return (
        <div className='mx-auto max-w-4xl'>

            {/* Input sec */}
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={txtInputCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(tempStr)}>+</button>
                {/* <p>Todo list from another component</p> */}
            </div>

            {/*incompleted-Task box */}
            <div>
                {currTaskList.slice(0).reverse().map(x => <Task id={x.id} callsign={x.name} doneFunc={doneFunction} deleFunc={deleFunction} />)}
            </div>
            {/* Completed-task box */}
            <div>
                {completedTaskList.map(x => <CompletedTask callsign={x} />)}
            </div>
        </div>
    )


}

export default TodoList;