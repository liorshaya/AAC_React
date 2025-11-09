import { useState } from 'react'
import './Exe1.css'
import _default from "eslint-plugin-react-refresh";

function Exe1() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const addTask = () =>{
        if (task === "") return
        setTasks([...tasks,task])
        setTask("")
    }

    const deleteTask = (index) =>{
        const newTasks = tasks.filter((_default, i) => i !== index)
        setTasks(newTasks)
    }

    return (
        <>
            <div>

                <h1>My To-Do List</h1>

                <input value={task} onChange={event => setTask(event.target.value)} placeholder={"Write your task.."}/>
                <button className="addTaskButton" onClick={addTask}>Add task</button>
                <ul>
                    {tasks.map((t,i)=> (
                        <li key={i}>
                            <span className="taskText">{t}</span>
                            <button className="deleteButton" onClick={() => deleteTask(i)}> Delete </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Exe1