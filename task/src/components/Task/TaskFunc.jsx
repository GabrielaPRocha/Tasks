import React from 'react';
import './style.css'
 const Task = ({task,increment,decrement,deleteTask})=>{    
    return(
    <div className="cardTask">
    <h2>{task.title}</h2>
    <p>{task.sinopsys}</p>
    <div className="status">
        <span style={{width: task.status +'%'}}></span>
    </div>
    <div className="task-actions">
    <button className="btn-sm btn" 
    onClick={()=>increment(task.id)}>
    <span className="material-icons">add</span>
    </button>
    
    <button className="btn-sm btn" onClick={()=>decrement(task.id)}>
    <span className="material-icons">remove</span>
    </button>

    <button className="btn-sm btn-danger"onClick={()=>deleteTask(task.id)} >
    <span className="material-icons">delete</span>
    </button>
    </div>
    <p>{task.project}</p>
</div>);
 }
 export default Task;