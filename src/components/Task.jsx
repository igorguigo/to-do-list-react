import React from 'react';
import './Task.css'

const Task = ({task, handleTaskClick}) => {
    return ( 
        // <div className='task-container'>
        //     {task.title}
        // </div>

        return (
            <div className="task-container" style={task.completed ? {border}}>

            </div>
        )
    );
}
 
export default Task;