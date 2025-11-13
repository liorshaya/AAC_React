import React, {useState} from "react";
import './TodoList.css'

function ToDoList(){
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);
    const [index,setIndex] = useState(null);

    const addTask = () =>{
        if(index === null){
            setTasks([...tasks,task])
        }
        else {
            const updateTask = tasks;
            updateTask[index] = tasks;
            setTasks(updateTask)
            setIndex(null)
        }
        setTask("")
    }

    const editTask = (index) =>{
        setIndex(index)
        setTask(tasks[index])
    }

    const deleteTask = () =>{
        setTasks(tasks.filter(((task,i) => i !== index)))
        setIndex(null)
    }

    return(
        <>
            <h1>To-Do List</h1>
            <input type={"text"}
                   placeholder={"Enter your task"}
                   value={task}
                   onChange={(e) => setTask(e.target.value)}
            />
            <button disabled={task.trim()===""}
                    onClick={addTask}
            >{index === null ? "Add" : "Edit"}</button>

            {
                tasks.length>0&&
                <ul>
                    {
                        tasks.map((item,index) =>
                        <li key={index}>
                            {item}
                            <button onClick={()=>editTask(index)}>Edit</button>
                            <button onClick={deleteTask}>Delete</button>
                        </li>
                        )
                    }
                </ul>
            }
        </>
    )
}
export default ToDoList;