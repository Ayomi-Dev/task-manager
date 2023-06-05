import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import {v4 as uuidv4} from 'uuid'
uuidv4()


const EditTodo = ({ task, editTask, handleUpdatedTask, cancelEdit }) => {
    const [taskName, setTaskName] = useState(task.taskName)
    const [category, setCategory] = useState(task.category);
    const [date, setDate] = useState(task.date)
    const [startTime, setStartTime]= useState(task.startTime)
    const [endTime, setEndTime] = useState(task.endTime);
    const [description, setDescription] = useState(task.description)

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault(); 
        
        const taskValues = {
            ...task,
            taskName: taskName, 
            date: date, 
            category: category, 
            startTime: startTime, 
            endTime: endTime, 
            description: description
        }
        console.log(task)
        handleUpdatedTask(taskValues);

        // navigate('/home')

    }



    return ( 

        <>

            <div className="add-task">
                <h2>Update Task</h2> 

                <form >

                    <div className="info">
                    <label htmlFor="">Task Name</label>
                    <input required
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    </div>

                    <div className="info">
                        <label htmlFor="">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a Category</option>
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            <option value="Study">Study</option>
                            <option value="Social">Social</option>
                        </select>
                    </div>
            
                    <div className="info">
                        <label htmlFor="">Date & Time</label>
                        <input required
                            type="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="info sub">
                    <div className="sub-info">
                        <label htmlFor="">Start Time</label>
                        <input required
                            type="datetime"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />             
                    </div>
                    <div className="sub-info">
                        <label htmlFor="">End Time</label>
                        <input required
                            type="datetime" 
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="info">
                        <label htmlFor="">Description</label>
                        <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                
                    <button type="submit" onClick = {handleUpdate}>Update Task</button> 
                    <button className="edit-btn" onClick={cancelEdit}>Cancel</button>   
                </form>
            </div>
        </>
        
     );
}
 
export default EditTodo;